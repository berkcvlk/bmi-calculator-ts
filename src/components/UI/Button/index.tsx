import { StyledButton } from "./styles";

interface Props {
  onClick?: () => void;
}

const Button: React.FC<Props> = (props) => {
  return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
};

export default Button;
