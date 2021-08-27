import React from "react";
import styled from "styled-components";

const Square = styled.div`
  width: 60px;
  height: 60px;
  background-color: #3cb371;
  opacity: 0.7;
  position: absolute;
  top: -60px;
  left: -60px;
  z-index: -1;

  animation: square 25s linear alternate infinite;
  @keyframes square {
    to {
      transform: translate(100vw, 100vh);
    }
  }
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #1e90ff;
  position: absolute;
  top: 200px;
  left: -100px;
  z-index: -1;

  animation: circle 25s linear alternate infinite;
  @keyframes circle {
    to {
      transform: translate(100vw, -100vh);
    }
  }
`;

const Triangle = styled.div`
  width: 80px;
  height: 80px;
  background-color: #ff6347;
  opacity: 0.7;
  position: absolute;
  top: 400px;
  left: -50px;
  z-index: -1;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);

  animation: triangle 25s linear alternate infinite;
  @keyframes triangle {
    to {
      transform: translate(100vw, -50vh);
    }
  }
`;

const AnimatedShapes = () => {
  return (
    <>
      <Square />
      <Circle />
      <Triangle />
    </>
  );
};

export default AnimatedShapes;
