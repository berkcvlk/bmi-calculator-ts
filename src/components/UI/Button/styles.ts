import styled from "styled-components";
import { bmiCategoryColorsByLabel } from "../../../utils/bmi";

export const Button = styled.button<{ theme: string }>`
  --dark-color: ${({ theme }) => bmiCategoryColorsByLabel[theme].dark};
  --light-color: ${({ theme }) => bmiCategoryColorsByLabel[theme].light};

  width: 100%;
  text-transform: uppercase;

  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 600;

  border-radius: 12px;
  border: none;

  color: var(--dark-color);
  background: var(--light-color);
  padding: 18px 0;
  margin-bottom: 20px;

  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 3px 0 0 var(--dark-color);
  }

  &:active {
    transform: translateY(3px);
    box-shadow: 0 0 0 0 var(--light-color);
  }

  transition: all 0.3s;
`;
