import styled from "styled-components";

export const StyledButton = styled.button<{ theme?: string }>`
  width: 100%;
  text-transform: uppercase;

  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 600;

  border-radius: 12px;
  border: none;

  color: var(--primary-color);
  background: var(--primary-light-color);
  padding: 18px 0;

  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 3px 0 0 var(--primary-color);
  }

  &:active {
    transform: translateY(3px);
    box-shadow: 0 0 0 0 var(--primary-light-color);
  }

  transition: all 0.3s;
`;
