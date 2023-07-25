// React
import { FC } from "react";
// @mui
import { Switch as MuiSwitch } from "@mui/material";
// packages
import { Field } from "react-final-form";

// Types
import { SwitchProps, SwitchWrapperProps } from "./Types";

const Slider: FC<SwitchProps> = ({ name, fieldProps, ...rest }) => {
  return (
    <Field
      name={name}
      render={({ input, meta }) => (
        <SwitchWrapper input={input} meta={meta} {...rest} />
      )}
      {...fieldProps}
    />
  );
};

// ||-----------------------------------||
// ||   Mui Switch Wrapper           ||
// ||   *** Don't export the component  ||
// ||-----------------------------------||
const SwitchWrapper: FC<SwitchWrapperProps> = ({
  input: { name, value, onChange, onBlur, onFocus, ...restInput },
  meta,
  helperText,
  required,
  ...rest
}) => {
  return (
    <MuiSwitch
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

export default Slider;
