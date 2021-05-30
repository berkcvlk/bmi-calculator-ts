import styled from "styled-components";

export const StyledInputDiv = styled.div`
  display: flex;
  width: 100%;

  margin-bottom: 30px;
`;

export const StyledLabel = styled.label`
  display: block;

  font-size: 13px;
  font-weight: 800;

  text-transform: uppercase;

  color: var(--primary-color);
  margin-left: 5px;
  margin-bottom: 12px;
`;

export const StyledInput = styled.input`
  width: 100%;

  font-family: "Inter", sans-serif;
  font-size: 18px;

  text-indent: 20px;
  border: none;
  border-radius: 12px 0 0 12px;
  outline: none;

  background-color: #fafafa;
  color: var(--primary-text-color);

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: #b5b5b5;
  }
`;

export const StyledInputMeasure = styled.span`
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
