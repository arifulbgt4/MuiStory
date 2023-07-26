// React
import { FC } from "react";
// @mui
import { Checkbox as MuiCheckbox } from "@mui/material";
// packages
import { Field } from "react-final-form";

// Types
import { CheckboxProps, CheckboxWrapperProps } from "./Types";

const Checkbox: FC<CheckboxProps> = ({ name, fieldProps, ...rest }) => {
  return (
    <Field
      name={name}
      render={({ input, meta }) => (
        <CheckboxWrapper input={input} meta={meta} {...rest} />
      )}
      {...fieldProps}
    />
  );
};

// ||-----------------------------------||
// ||   Mui Checkbox Wrapper           ||
// ||   *** Don't export the component  ||
// ||-----------------------------------||
const CheckboxWrapper: FC<CheckboxWrapperProps> = ({
  input: { name, value, onChange, onBlur, onFocus, ...restInput },
  meta,
  helperText,
  required,
  ...rest
}) => {
  return (
    <MuiCheckbox
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      name={name}
      value={value}
      required={required}
      inputProps={{ required, ...restInput }}
      {...rest}
    />
  );
};
// ||----------------------------end

export default Checkbox;
