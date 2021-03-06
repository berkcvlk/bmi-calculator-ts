import React, { forwardRef } from "react";
import {
  StyledInputDiv,
  StyledInput,
  StyledInputMeasure,
  StyledLabel,
} from "./styles";

interface Props {
  type: string;
  min: number;
  max: number;
  measure: string;
  placeholder: string;
  label: string;
  ref: React.ForwardedRef<HTMLInputElement>;
}

const Input: React.FC<Props> = forwardRef((props, ref) => {
  return (
    <>
      <StyledLabel>{props.label}</StyledLabel>
      <StyledInputDiv>
        <StyledInput
          type={props.type}
          min={props.min}
          max={props.max}
          placeholder={props.placeholder}
          ref={ref}
        />
        <StyledInputMeasure>{props.measure}</StyledInputMeasure>
      </StyledInputDiv>
    </>
  );
});

export default Input;
