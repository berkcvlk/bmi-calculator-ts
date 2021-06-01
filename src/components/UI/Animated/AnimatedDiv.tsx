import { animated, useSpring } from "react-spring";

interface Props {
  animateProps: {};
}

const AnimatedDiv: React.FC<Props> = ({ children, animateProps }) => {
  const animate = useSpring(animateProps);

  return <animated.div style={animate}>{children}</animated.div>;
};

export default AnimatedDiv;
