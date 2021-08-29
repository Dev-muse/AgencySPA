import React from "react";
import styled from "styled-components";
import App from "../assets/app.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  display: flex;
  height: 100%;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;
const Left = styled.div`
  flex: 1;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 80%;
`;
const Title = styled.span`
  font-size: 70px;
  @media only screen and (max-width: 480px) {
    font-size: 40px;
  }
`;
const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;
const Desc = styled.span`
  font-size: 24px;
  color: #777;
  margin-top: 20px;

  @media only screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
const Button = styled.a`
  width: 150px;
  text-align: center;
  border: none;
  padding: 15px 20px;
  background-color: #0056ab;
  text-decoration: none;
  color: #fff;
  border-radius: 10px;
  margin-top: 30px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const Feature = () => {
  return (
    <Container id='features'>
      <Left>
        <Image src={App} />
      </Left>
      <Right>
        <Title>
          <b>Good</b> Design <br />
          <b>Good</b> Business
        </Title>

        <SubTitle>We know from experience that good design means good business.</SubTitle>

        <Desc>
          We help our clients succeed by creating a strong brand identity, quality digital and print
          materials that clearly achieve your marketing goals.
        </Desc>

        <Desc>
          We are invested in the success of your brand throughout its journey , from it's inception
          to it's prominence as giant brand, so you're in safe hands.
        </Desc>

        <Button href='#contact'>Learn More</Button>
      </Right>

      <AnimatedShapes />
    </Container>
  );
};

export default Feature;
