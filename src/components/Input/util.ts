// Types
import { FieldShowErrorOptions, FieldMetaOptions } from "./Types";

// ||---------------------------||
// ||  Field validate composer  ||
// ||---------------------------||
export const composeValidators =
  (...validators: any) =>
  (value: any) =>
    validators.reduce(
      (error: any, validator: Function) => error || validator(value),
      undefined
    );

// ||------------------------------||
// ||  Field validate if required  ||
// ||------------------------------||
export const required =
  (text: string = "Required", isRequired: boolean = true) =>
  (value: any) =>
    isRequired && (value ? undefined : text);

// ||---------------------------------------------||
// ||  Field validate if required minimum length  ||
// ||---------------------------------------------||
export const minLength =
  (length: number = 0, text?: string) =>
  (value: any) =>
    value?.length < length && (text || `Min length ${length}`);

// ||---------------------------------------------||
// ||  Field validate if required maximum length  ||
// ||---------------------------------------------||
export const maxLength =
  (length: number = 0, text?: string) =>
  (value: any) =>
    value?.length > length && (text || `Max length ${length}`);

// ||---------------------------------------||
// ||  Field validate show errors on time   ||
// ||---------------------------------------||
export const showErrorOnChange: FieldShowErrorOptions = ({
  meta: { submitError, dirtySinceLastSubmit, error, touched, modified },
}: FieldMetaOptions) =>
  !!(
    ((submitError && !dirtySinceLastSubmit) || error) &&
    (touched || modified)
  );
