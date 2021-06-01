import { useSpring } from "react-spring";
import { animateProps } from "./animate";
import { Container, Header, Title } from "./styles";

const ModalContainer: React.FC = ({ children }) => {
  const animate = useSpring(animateProps);

  return (
    <Container style={animate}>
      <Header>
        <Title>Recommendation For You!</Title>
      </Header>
      {children}
    </Container>
  );
};

export default ModalContainer;
