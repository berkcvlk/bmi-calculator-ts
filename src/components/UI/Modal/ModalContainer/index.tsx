import { useSpring } from "react-spring";
import Close from "../../Icons/Close";
import { animateProps } from "./animate";
import { Container, Header, Title } from "./styles";

interface Props {
  // This should be the function
  // that makes the boolean value to false
  onClose: () => void;
}

const ModalContainer: React.FC<Props> = ({ children, onClose }) => {
  const animate = useSpring(animateProps);

  return (
    <Container style={animate}>
      <Header>
        <Title>Recommendation For You!</Title>
        <Close onClose={onClose}></Close>
      </Header>
      {children}
    </Container>
  );
};

export default ModalContainer;
