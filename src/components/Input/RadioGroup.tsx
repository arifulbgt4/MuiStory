// React
import { FC } from "react";
// @mui
import { RadioGroup as MuiRadioGroup } from "@mui/material";
// packages
import { Field } from "react-final-form";

// Types
import { RadioGroupProps, RadioGroupWrapperProps } from "./Types";

const RadioGroup: FC<RadioGroupProps> = ({ name, fieldProps, ...rest }) => {
  return (
    <Field
      name={name}
      render={({ input, meta }) => (
        <RadioGroupWrapper input={input} meta={meta} {...rest} />
      )}
      {...fieldProps}
    />
  );
};

// ||-----------------------------------||
// ||   Mui RadioGroup Wrapper           ||
// ||   *** Don't export the component  ||
// ||-----------------------------------||
const RadioGroupWrapper: FC<RadioGroupWrapperProps> = ({
  input: { name, value, onChange, onBlur, onFocus },
  meta,
  ...rest
}) => {
  return (
    <MuiRadioGroup
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      name={name}
      value={value}
      {...rest}
    />
  );
};
// ||----------------------------end

export default RadioGroup;
