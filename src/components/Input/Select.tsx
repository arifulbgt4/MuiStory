// React
import { FC } from "react";
// @mui
import {
  Select as MuiSelect,
  FormControl as MuiFormControl,
  FormHelperText as MuiFormHelperText,
} from "@mui/material";
// packages
import { Field } from "react-final-form";

// Util
import { showErrorOnChange } from "./util";
// Types
import { SelectProps, SelectWrapperProps } from "./Types";

const Select: FC<SelectProps> = ({ name, fieldProps, ...rest }) => {
  return (
    <Field
      name={name}
      render={({ input, meta }) => (
        <SelectWrapper input={input} meta={meta} {...rest} />
      )}
      {...fieldProps}
    />
  );
};

// ||-----------------------------------||
// ||   Mui Select Wrapper           ||
// ||   *** Don't export the component  ||
// ||-----------------------------------||
const SelectWrapper: FC<SelectWrapperProps> = ({
  input: { name, value, type, onChange, onBlur, onFocus, ...restInput },
  meta,
  helperText,
  required,
  ...rest
}) => {
  const { error, submitError } = meta;
  const isError = showErrorOnChange({ meta });

  return (
    <MuiFormControl error={isError}>
      <MuiSelect
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        name={name}
        value={value}
        error={isError}
        required={required}
        inputProps={{ required, ...restInput }}
        {...rest}
      />
      {helperText ||
        (isError && (
          <MuiFormHelperText>
            {isError ? error || submitError : helperText}
          </MuiFormHelperText>
        ))}
    </MuiFormControl>
  );
};
// ||----------------------------end

export default Select;
