import React from "react";
import styled from "styled-components";
import SearchIcon from "../img/search.png";

const Container = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0 0 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0 0 17px -11px rgba(0, 0, 0, 0.58);
`;

const Image = styled.img`
  width: 20px;
`;
const Text = styled.span`
  margin-top: 10px;
  text-align: center;
`;
const MiniCard = ({ text }) => {
  return (
    <Container>
      <Image src={SearchIcon} />
      <Text>{text}</Text>
    </Container>
  );
};

export default MiniCard;
