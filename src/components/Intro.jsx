import React from "react";
import styled from "styled-components";
import heroImg from "../assets/woman.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
  overflow: hidden;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 4;
  @media only screen and (max-width: 480px) {
    flex: 1;
    height: 100%;
  }
`;

const Title = styled.h1`
  font-size: 60px;
  width: 60%;
  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 50px;
  }
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 15px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 16px;
  }
`;

const Info = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
  margin-top: 50px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;
const Button = styled.a`
  padding: 15px;
  background-color: darkblue;
  text-align: center;
  color: #fff;
  text-decoration: none;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Phone = styled.a`
  color: #fd0983;
  font-weight: bold;
  text-decoration: none;
  @media only screen and (max-width: 480px) {
    color: #000;
    margin-top: 10px;
  }
`;

const ContactText = styled.span`
  color: grey;
  margin-top: 5px;
  @media only screen and (max-width: 480px) {
    color: #111;
  }
`;
const Right = styled.div`
  flex: 3;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  position: relative;
  left: 155px;
  width: 80%;
  z-index: 2;
`;

function Intro() {
  return (
    <Container>
      <Left>
        <Title>Let Us Be Your Muse.</Title>
        <Desc>
          We believe in producing quality products and services in collaboration with our valued
          clients as the only way to deliver impactful results for them.
        </Desc>
        <Info>
          <Button href='#contact'>Start A Project</Button>
          <Contact>
            <Phone href='tel:07508218412'>
              <span style={{ color: "#000" }}>Call Us:</span> +447508218412
            </Phone>
            <ContactText>For any queries or concerns</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={heroImg} alt='Hero image' />
      </Right>
      <AnimatedShapes />
    </Container>
  );
}

export default Intro;
