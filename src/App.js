import "./App.css";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const IntroShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(67% 0, 100% 0, 100% 100%, 55% 100%);
  z-index: -1;
  background-color: #fd0983;
`;
function App() {
  return (
    <Container>
      <Navbar></Navbar>
      <Intro />
      <IntroShape />
    </Container>
  );
}

export default App;
