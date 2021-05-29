import styled from "styled-components";

interface Props {
  type: string;
  min: number;
  max: number;
  measure: string;
  placeholder: string;
}

const Input: React.FC<Props> = (props) => {
  return (
    <StyledDiv>
      <StyledInput
        type={props.type}
        min={props.min}
        max={props.max}
        placeholder={props.placeholder}
      />
      <InputMeasure>{props.measure}</InputMeasure>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  width: 430px;
`;

const StyledInput = styled.input`
  font-family: "Inter", sans-serif;
  font-size: 18px;

  text-indent: 20px;

  border: none;
  outline: none;

  background-color: #fafafa;
  border-radius: 12px 0 0 12px;

  width: 380px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const InputMeasure = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50px;
  width: 50px;
  border-radius: 0 12px 12px 0;
  background-color: #eeeeee;

  color: #a7a7a7;
  font-weight: 600;
`;

export default Input;
