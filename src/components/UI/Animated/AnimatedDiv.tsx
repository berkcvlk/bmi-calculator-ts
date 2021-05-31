import { animated } from "react-spring";

interface Props {
  animate: {};
}

const AnimatedDiv: React.FC<Props> = ({ children, animate }) => {
  return <animated.div style={animate}>{children}</animated.div>;
};

export default AnimatedDiv;
