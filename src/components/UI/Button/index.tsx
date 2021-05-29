import React from "react";
import styled from "styled-components";

interface Props {
  theme: string;
}

const Button: React.FC<Props> = (props) => {
  return <StyledButton theme={props.theme}>{props.children}</StyledButton>;
};

const StyledButton = styled.button<Props>`

  background: #fafafa;
  border: none;
  font-size: 18px;
  padding: 7px 10px;
  cursor: pointer;

  &:hover {
    color: blue;
  }

  &:active {
    transform: translateY(1px);
  }

  color: ${props => props.theme === "dark" ? "black" : "red" }
`;

export default Button;
