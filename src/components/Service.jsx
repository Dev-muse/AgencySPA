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
`;
const Right = styled.div`
  flex: 1;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

const Title = styled.h1``;
const Desc = styled.p`
  font-size: 24px;
  margin-top: 20px;
  color: #555;
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

const Service = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
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
            <MiniCard text={"Web design and development"} />
            <MiniCard text={"Demand generation services"} />
            <MiniCard text={"Reputation management"} />
          </CardContainer>

          <Button onClick={() => setOpen(true)}>
            <Icon src={playIcon} />
            How it works
          </Button>
        </Wrapper>
      </Right>
    </Container>
  );
};

export default Service;
