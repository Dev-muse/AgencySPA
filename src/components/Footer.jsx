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
const List = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
  margin-left: 15px;
`;
const ListItem = styled.li`
  margin-right: 20px;
`;
const Copyright = styled.span`
  margin-right: 15px;
`;

const Footer = () => {
  return (
    <Container>
      <List>
        <ListItem>Guide</ListItem>
        <ListItem>Support</ListItem>
        <ListItem>Careers</ListItem>
        <ListItem>Community</ListItem>
      </List>
      <Copyright>RapidMuse &copy; 2021 All rights reserved.</Copyright>
    </Container>
  );
};

export default Footer;
