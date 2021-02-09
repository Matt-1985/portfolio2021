import React from "react";
import { Parallax } from "react-scroll-parallax";
import { useSpring, animated } from "react-spring";
import PropTypes from "prop-types";
import styled from "styled-components";

const Bubble1 = styled(animated.div)`
  height: 300px;
  width: 300px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 4;
`;

const VitaContainer = styled.div`
  height: 70vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  margin: 0;
  transform: skewY(10deg);
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 6rem;
  width: 100%;
  border-radius: 12px;
  background: rgb(232, 121, 222);
  background: linear-gradient(
    125deg,
    rgba(232, 121, 222, 0.9023984593837535) 0%,
    rgba(0, 144, 255, 1) 59%,
    rgba(240, 255, 31, 0.8603816526610644) 95%
  );
  z-index: 1;
`;

const Headline = styled.span`
  position: relative;
  top: 0;
  bottom: 2;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  text-shadow: 4px 5px 0px rgba(232, 121, 222, 0.88);
`;

const Vita = () => {
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  Vita.propTypes = {
    interpolate: PropTypes.function,
  };

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 200, friction: 50 },
  }));

  return (
    <>
      <Parallax y={[-40, 50]} x={[60, 50]} tagInner="figure">
        <Headline>Vita</Headline>
      </Parallax>
      <VitaContainer>
        <Bubble1
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{
            // eslint-disable-next-line react/prop-types
            transform: props.xys.interpolate(trans),
          }}
        />
      </VitaContainer>
    </>
  );
};

export default Vita;
