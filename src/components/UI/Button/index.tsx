import { StyledButton } from "../../../styles/button";

interface Props {}

const Button: React.FC<Props> = (props) => {
  return <StyledButton>{props.children}</StyledButton>;
};

export default Button;
