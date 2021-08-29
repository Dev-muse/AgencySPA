import React from "react";
import styled from "styled-components";
import Background from "../assets/background.png";
import Map from "../assets/map.png";
import Phone from "../assets/phone.png";
import Send from "../assets/send.png";

const Container = styled.div`
  height: 90%;
  background: url(${Background});
`;
const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  flex: 1;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  margin: 50px;
  margin-left: 75px;
  margin-top: 0;
  @media only screen and (max-width: 480px) {
    margin: 20px;
    width: 100%;
  }
`;

const Form = styled.form`
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: space-between;
    margin-top: -15px;
  }
`;

const LeftForm = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;

  @media only screen and (max-width: 480px) {
    height: 50%;
    margin-right: 0;
  }
`;

const RightForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  @media only screen and (max-width: 480px) {
    width: 50%;
  }
`;

const Input = styled.input`
  width: 200px;
  padding: 20px;

  @media only screen and (max-width: 480px) {
    padding: 5px;
    margin-top: 10px;
  }
`;
const TextArea = styled.textarea`
  width: 200px;
  padding: 20px;
  height: 60%;

  @media only screen and (max-width: 480px) {
    padding: 5px;
    margin-left: -2px;
    margin-top: 20px;
  }
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: #0056ab;
  color: #fff;
  border-radius: 10px;
  margin-top: 30px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: #000;
    color: #fff;
  }

  @media only screen and (max-width: 480px) {
    margin-top: 5px;
    padding: 5px;
    font-size: 14px;
  }
`;

const AddressContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const AddressItem = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 50px;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    width: 15px;
  }
`;
const Text = styled.span`
  font-size: 20px;
  margin-right: 15px;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
const Contact = () => {
  return (
    <Container id='contact'>
      <Wrapper>
        <FormContainer>
          <Title>Let's start a conversation</Title>
          <Form>
            <LeftForm>
              <Input placeholder='Your Name' />
              <Input placeholder='Email' />
              <Input placeholder='Subject' />
            </LeftForm>
            <RightForm>
              <TextArea placeholder='Message..' />
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressItem>
            <Icon src={Map} />
            <Text>53 Guild Street, London, NW2 7NR</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Phone} />
            <Text>+447508218412</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Send} />
            <Text>support@rapidmuse.com</Text>
          </AddressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
