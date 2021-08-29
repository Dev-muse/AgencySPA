import "./App.css";
import styled, { css } from "styled-components";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Feature from "./components/Feature";
import Service from "./components/Service";
import Price from "./components/Price";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const IntroShape = styled.div`
  ${Shape}
  clip-path: polygon(67% 0, 100% 0, 100% 100%, 55% 100%);
  z-index: -1;
  background-color: #fd0983;
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0% 0, 55% 0, 33% 100%, 0% 100%);
  z-index: -1;
  background-color: #1e90ff;
`;
const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0% 0, 33% 0, 33% 100%, 0% 100%);
  z-index: -1;
  background-color: #f1852b;
`;
const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(33% 0, 100% 0, 100% 100%, 67% 100%);
  z-index: -1;
  background-color: #fd0983;
`;
function App() {
  return (
    <>
      <Container>
        <Navbar></Navbar>
        <Intro />
        <IntroShape />
      </Container>
      <Container>
        <Feature />
        <FeatureShape />
      </Container>
      <Container>
        <Service />
        <ServiceShape />
      </Container>
      <Container>
        <Price />
        <PriceShape />
      </Container>
      <Container>
        <Contact />
        <Footer />
      </Container>
    </>
  );
}

export default App;
