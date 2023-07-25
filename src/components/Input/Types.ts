// @mui
import { TextFieldProps as MuiTextFieldProps } from "@mui/material";
// packages
import { FieldProps, FieldRenderProps, FieldMetaState } from "react-final-form";

export interface TextFieldProps
  extends Partial<Omit<MuiTextFieldProps, "onChange">> {
  name: string;
  fieldProps?: Partial<FieldProps<any, any>>;
}

export interface TextFieldWrapperProps
  extends FieldRenderProps<MuiTextFieldProps> {}

export type FieldShowErrorOptions = (props: FieldMetaOptions) => boolean;

export interface FieldMetaOptions {
  meta: FieldMetaState<any>;
}
