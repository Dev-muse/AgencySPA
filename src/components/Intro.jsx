import React from "react";
import styled from "styled-components";
import heroImg from "../img/woman.png";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
`;
const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 4;
`;

const Title = styled.h1`
  font-size: 60px;
  width: 60%;
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 15px;
`;

const Info = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
  margin-top: 50px;
`;
const Button = styled.button`
  padding: 15px;
  background-color: #fd0983;
  color: #fff;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
`;
const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Phone = styled.span`
  color: #fd0983;
  font-weight: bold;
`;

const ContactText = styled.span`
  color: grey;
  margin-top: 5px;
`;
const Right = styled.div`
  flex: 3;
`;

const Image = styled.img`
  position: relative;
  left: 126px;
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
          <Button>Start A Project</Button>
          <Contact>
            <Phone>
              <span style={{ color: "#000" }}>Call Us:</span> +447508218412
            </Phone>
            <ContactText>For any queries or concerns</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={heroImg} alt='Hero image' />
      </Right>
    </Container>
  );
}

export default Intro;
