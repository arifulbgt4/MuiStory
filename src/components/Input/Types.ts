// @mui
import {
  TextFieldProps as MuiTextFieldProps,
  SliderProps as MuiSliderProps,
  SwitchProps as MuiSwitchProps,
  SelectProps as MuiSelectProps,
} from "@mui/material";
// packages
import { FieldProps, FieldRenderProps, FieldMetaState } from "react-final-form";

export interface TextFieldProps
  extends Partial<Omit<MuiTextFieldProps, "onChange">> {
  name: string;
  fieldProps?: Partial<FieldProps<any, any>>;
}

export interface TextFieldWrapperProps
  extends FieldRenderProps<MuiTextFieldProps> {}

export interface SliderProps extends Partial<Omit<MuiSliderProps, "onChange">> {
  name: string;
  fieldProps?: Partial<FieldProps<any, any>>;
}

export interface SlideWrapperProps extends FieldRenderProps<MuiSliderProps> {}

export interface SwitchProps extends Partial<Omit<MuiSwitchProps, "onChange">> {
  name: string;
  fieldProps?: Partial<FieldProps<any, any>>;
}

export interface SwitchWrapperProps extends FieldRenderProps<MuiSwitchProps> {}

export interface SelectProps extends Partial<Omit<MuiSelectProps, "onChange">> {
  name: string;
  fieldProps?: Partial<FieldProps<any, any>>;
}

export interface SelectWrapperProps extends FieldRenderProps<MuiSelectProps> {}

export type FieldShowErrorOptions = (props: FieldMetaOptions) => boolean;

export interface FieldMetaOptions {
  meta: FieldMetaState<any>;
}
