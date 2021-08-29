import React, { useState } from "react";
import styled from "styled-components";
import MiniCard from "./MiniCard";
import user from "../assets/user.png";
import playIcon from "../assets/play.png";
import serviceVideo from "../assets/service.mp4";

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const Left = styled.div`
  flex: 1;
  position: relative;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  display: ${(props) => (props.open ? "none" : "block")};
  height: 100%;
  position: relative;
  top: 100px;
  margin-left: 100px;
`;

const Video = styled.video`
  display: ${(props) => (!props.open ? "none" : "block")};
  position: absolute;
  top: 0;
  bottom: 0;
  right: 60px;
  margin: auto;
  border: none;
  height: 300px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    right: 0;
  }
`;
const Right = styled.div`
  flex: 1;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  @media only screen and (max-width: 480px) {
    padding: 20px;
  }
`;

const Title = styled.h1``;
const Desc = styled.p`
  font-size: 24px;
  margin-top: 20px;
  color: #555;

  @media only screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: space-between;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  width: 180px;
  border: none;
  border-radius: 10px;
  color: #fff;
  background-color: #f1852b;
  padding: 15px;
  font-size: 20px;
  margin-top: 50px;
  cursor: pointe;
  &:hover {
    background: #000;
  }
`;

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  background: #fff;
  padding: 5px;
  border: none;
  border-radius: 5px;
  right: 5px;
  top: 25%;
`;

const Service = () => {
  const data = {
    service1: "Web design & development",
    service2: "Lead generation service",
    service3: "Reputation management",
  };
  const [open, setOpen] = useState(false);
  const smallScreen = window.screen.width <= 480 ? true : false;

  return (
    <Container id='services'>
      <Left>
        <Image open={open} src={user} />
        <Video open={open} autoplay loop controls src={serviceVideo} />
      </Left>
      <Right>
        <Wrapper>
          <Title>Our Services</Title>
          <Desc>
            We provide a seamless full service digital experience for startups and small businesses
            looking for a partner for their design & development, lead generation and communications
            needs. We work with you to turn your business goals into reality.
          </Desc>
          <CardContainer>
            <MiniCard text={data.service1} />
            <MiniCard text={data.service2} />
            <MiniCard text={data.service3} />
          </CardContainer>

          <Button onClick={() => setOpen(true)}>
            <Icon src={playIcon} />
            How it works
          </Button>
        </Wrapper>
      </Right>
      {smallScreen && open ? (
        <Modal>
          <Video open={open} autoplay loop controls src={serviceVideo} />
          <CloseButton onClick={() => setOpen(false)}>Close</CloseButton>
        </Modal>
      ) : null}
    </Container>
  );
};

export default Service;
