import React from "react";
import styled from "styled-components";
import tick from "../img/tick.png";

const Container = styled.div`
  -webkit-box-shadow: 0 0 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0 0 17px -11px rgba(0, 0, 0, 0.58);
  boder-radius: 10px;
  padding: 20px;
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-right: 50px;
  align-items: center;
  height: 500px;
  margin-left: 15px;
`;
const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Price = styled.span`
  font-weight: bold;
  font-size: 50px;
`;
const Type = styled.button`
  padding: 10px;
  border: 1.5px solid #fd0983;
  font-size: 16px;
  border-radius: 20px;
  color: #fd0983;
  background: #fff;
  margin: 10px 0;
`;

const List = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const ListItem = styled.li`
  min-height: 22px;
  margin-bottom: 10px;
  padding-left: 32px;
  background-image: url(${tick});
  background-position: 0% -1px;
  background-size: 24px;
  background-repeat: no-repeat;
  min-width: 200px;
`;
const Button = styled.button`
  padding: 15px;
  border-radius: 10px;
  font-size: 16px;
  background-color: #fd0983;
  border: none;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    color: #fff;
    background: #000;
  }
`;

const Desc = styled.p`
  margin: 5px 0 15px;
  text-align: center;
  font-size: 16px;
`;

const PriceCard = ({ price, type, list, desc }) => {
  return (
    <Container>
      <PriceContainer>
        <Price>
          <span style={{ color: "#2ECC71" }}>$</span>
          {price}
        </Price>
        /monthh
      </PriceContainer>
      <Type>{type}</Type>
      <Desc>{desc}</Desc>
      <List>
        {list.map((item, index) => {
          return <ListItem>{item}</ListItem>;
        })}
      </List>
      <Button>Get Started</Button>
    </Container>
  );
};

export default PriceCard;
