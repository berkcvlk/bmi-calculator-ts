import styled from "styled-components";

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
