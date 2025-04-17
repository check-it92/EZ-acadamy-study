import React, { useState } from "react";
import GlobalStyles from "./styles/GlobalStyles.styles";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

const Title = styled.h1`
  text-align: center;
  margin: 100px 0;
  font-size: 3.2rem;
  font-weight: 600;
`;

function App() {

  const [change, setChange] = useState(""); // 초기값 설정
  const onChange = (e) => { // 구현할수 있는 변수 설정
    setChange(e.target.value);
    console.log(change);
  };

  return (
    <>
      <GlobalStyles />
      <Title>연락처</Title>
      <Container>
        <Row>
          <Col>
            <ContactForm onChange={onChange} />
          </Col>
          <Col>
            <ContactList onChange={onChange} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
