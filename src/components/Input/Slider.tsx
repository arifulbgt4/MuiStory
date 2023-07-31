// React
import { FC } from "react";
// @mui
import { Slider as MuiSlider } from "@mui/material";
// packages
import { Field } from "react-final-form";

// Types
import { SliderProps, SlideWrapperProps } from "./Types";

const Slider: FC<SliderProps> = ({ name, fieldProps, ...rest }) => {
  return (
    <Field
      name={name}
      render={({ input, meta }) => (
        <SliderWrapper input={input} meta={meta} {...rest} />
      )}
      {...fieldProps}
    />
  );
};

// ||-----------------------------------||
// ||   Mui Slider Wrapper           ||
// ||   *** Don't export the component  ||
// ||-----------------------------------||
const SliderWrapper: FC<SlideWrapperProps> = ({
  input: { name, value, onChange, onBlur, onFocus },
  ...rest
}) => {
  return (
    <MuiSlider
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      name={name}
      value={value as any}
      {...rest}
    />
  );
};
// ||----------------------------end

export default Slider;
