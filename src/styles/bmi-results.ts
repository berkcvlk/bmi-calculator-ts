import styled from "styled-components";
import { bmiCategoryColorsByLabel } from "../utils/bmi";

export const Score = styled.p`
  margin: 0;
  font-size: 65px;
  font-weight: 600;
  color: var(--primary-color);
`;

export const ScoreLabel = styled.p<{ category: string }>`
  margin: 0;
  font-size: 25px;
  font-weight: 600;

  color: ${({ category }) => bmiCategoryColorsByLabel[category]};
`;

export const CategoryList = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;

  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const CategoryListItem = styled.p`
  margin-top: 0;
  color: var(--primary-text-color);
`;
