import React, { ReactChildren } from "react";
import styled from "styled-components";

export const BIMScore = styled.p`
  margin-top: 10px;
  margin-bottom: 0;

  font-size: 65px;
  font-weight: 600;
  color: var(--primary-color);
`;

export const BIMScoreLabel = styled.p<{ bmi: string }>`
  margin: 0;

  font-size: 25px;
  font-weight: 600;

  color: ${({ bmi }) => {
    const bmiN = +bmi;
    if (bmiN <= 18.5) return "var(--purple)";
    if (bmiN > 18.5 && bmiN <= 24.9) return "var(--green)";
    if (bmiN > 24.9 && bmiN <= 29.9) return "var(--orange)";
    else return "var(--red)";
  }};
`;

export const BIMCategoryList = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;

  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const BIMCategoryListItem = styled.p`
  margin-top: 0;
  color: var(--primary-text-color);
`;
