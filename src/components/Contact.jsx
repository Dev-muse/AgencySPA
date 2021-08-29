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
`;
const FormContainer = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  margin: 50px;
  margin-left: 75px;
  margin-top: 0;
`;

const Form = styled.form`
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftForm = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
`;

const RightForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 200px;
  padding: 20px;
`;
const TextArea = styled.textarea`
  width: 200px;
  padding: 20px;
  height: 125px;
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
`;

const AddressContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddressItem = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 50px;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 20px;
`;
const Text = styled.span`
  font-size: 20px;
  margin-right: 15px;
`;
const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Questions? <br /> Let's start a conversation
          </Title>
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
