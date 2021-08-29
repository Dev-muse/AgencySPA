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
  width: 150px;
`;
Logo.defaultProps = {
  src: Myimg,
};

const Menu = styled.ul`
  display: flex;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const MenuItem = styled.a`
  margin-right: 30px;
  font-size: 20px;
  color: gray;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: #fd0983;
  }
`;

const Button = styled.a`
  border: 2px solid #fff;
  padding: 10px 20px;
  background-color: #fd0983;
  text-decoration: none;
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
  @media only screen and (max-width: 480px) {
    text-align: center;
    font-size: 16px;
    text-transform: capitalize;
    padding: 8px;
  }
`;

const Navbar = () => {
  return (
    <Container id='home'>
      <Wrapper>
        <Left>
          <Logo alt='RapidMuse logo ' />
          <Menu>
            <MenuItem href='#home'>Home</MenuItem>
            <MenuItem href='#features'>Features</MenuItem>
            <MenuItem href='#services'>Services</MenuItem>
            <MenuItem href='#pricing'>Pricing</MenuItem>
            <MenuItem href='#contact'>Contact</MenuItem>
          </Menu>
        </Left>
        <Button href='#contact'>Join Today</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
