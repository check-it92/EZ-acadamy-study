import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { useDispatch } from "react-redux";
// 상태역할을 촉발시키는 함수 직접 쓰진 못하고 해당 인스턴스 객체가

const Container = styled.div`
  & input[type="text"] {
    padding: 8px;
    margin-bottom: 20px;
    font-size: 1.6rem;
    &::placeholder {
      font-size: 1.6rem;
    }
  }
  & Button[type="submit"] {
    width: 100%;
    padding: 8px;
    font-size: 1.6rem;
  }
`;

const ContactForm = () => {
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const dispatch = useDispatch();

  const addContact = (e) => {
    e.preventDefault();
    dispatch({
      // 액션개체가 필요
      type: "ADD_CONTACT",
      payload: {
        name,
        number,
      },
    });
  };
  return (
    <Container>
      <Form onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>이름</Form.Label>
          <Form.Control
            type="text"
            placeholder="이름을 입력해주세요."
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicContact">
          <Form.Label>전화번호</Form.Label>
          <Form.Control
            type="text"
            placeholder="전화번호를 입력해주세요."
            onChange={(e) => setNumber(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          추가
        </Button>
      </Form>
    </Container>
  );
};

export default ContactForm;
