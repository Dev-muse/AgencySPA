import React from "react";
import styled from "styled-components";
import Myimg from "../assets/logo.svg";

const Container = styled.div`
  height: 50px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.img`
  width: 200px;
`;
Logo.defaultProps = {
  src: Myimg,
};

const Menu = styled.ul`
  display: flex;
  list-style: none;
`;
const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  color: gray;
  font-weight: bold;

  &:hover {
    color: #fd0983;
  }
`;

const Button = styled.button`
  border: 2px solid #fff;
  padding: 10px 20px;
  background-color: #fd0983;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #fd0983;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo alt='logo ' />
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>Features</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Pricing</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Menu>
        </Left>
        <Button>Join Today</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
