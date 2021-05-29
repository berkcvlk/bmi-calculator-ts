import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  text-transform: uppercase;

  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 600;

  border-radius: 12px;
  border: none;

  color: var(--primary-color);
  background: var(--primary-light-color);
  padding: 15px 50px;

  cursor: pointer;

  &:active {
    transform: translateY(3px);
    box-shadow: 0 0 0 0 var(--primary-light-color);
  }

  transition: all 0.3s;
`;
