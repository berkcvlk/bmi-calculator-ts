import { animated } from "react-spring";
import styled from "styled-components";

export const Container = styled(animated.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  z-index: 1050;

  width: 845px;
  height: 650px;
  padding: 75px;

  background-color: white;
  border-radius: 12px;
`;

export const Header = styled.div`
  display: flex;
  margin-bottom: 40px;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;

  color: var(--primary-color);
`;
