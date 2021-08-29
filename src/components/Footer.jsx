import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fd0983;
  color: lightgray;
`;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    padding: 10px;
  }
`;
const List = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
  margin-left: 15px;
  margin-right: 25px;
`;
const ListItem = styled.li`
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    margin-right: 15px;
    font-size: 12px;
  }
`;
const Copyright = styled.span`
  margin-right: 15px;
  @media only screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>Guide</ListItem>
          <ListItem>Support</ListItem>
          <ListItem>Careers</ListItem>
          <ListItem>Community</ListItem>
        </List>
        <Copyright>RapidMuse &copy; 2021 All rights reserved.</Copyright>
      </Wrapper>
    </Container>
  );
};

export default Footer;
