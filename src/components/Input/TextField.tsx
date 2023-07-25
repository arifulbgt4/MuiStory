// React
import { FC } from "react";
// @mui
import { TextField as MuiTextField } from "@mui/material";
// packages
import { Field } from "react-final-form";

// Util
import { showErrorOnChange } from "./util";
// Types
import { TextFieldProps, TextFieldWrapperProps } from "./Types";

const TextField: FC<TextFieldProps> = ({
  name,
  type = "text",
  fieldProps,
  ...rest
}) => {
  return (
    <Field
      name={name}
      type={type}
      render={({ input, meta }) => (
        <TextFieldWrapper input={input} meta={meta} {...rest} />
      )}
      {...fieldProps}
    />
  );
};

// ||-----------------------------------||
// ||   Mui TextField Wrapper           ||
// ||   *** Don't export the component  ||
// ||-----------------------------------||
const TextFieldWrapper: FC<TextFieldWrapperProps> = ({
  input: { name, value, type, onChange, onBlur, onFocus, ...restInput },
  meta,
  helperText,
  required,
  ...rest
}) => {
  const { error, submitError } = meta;
  const isError = showErrorOnChange({ meta });

  return (
    <MuiTextField
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      name={name}
      value={value}
      type={type}
      helperText={isError ? error || submitError : helperText}
      error={isError}
      required={required}
      inputProps={{ required, ...restInput }}
      {...rest}
    />
  );
};
// ||----------------------------end

export default TextField;
