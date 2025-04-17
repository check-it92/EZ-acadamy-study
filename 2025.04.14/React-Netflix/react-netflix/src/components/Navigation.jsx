import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// 이 부트스트랩은 공통분모에 어딜 들어가도 상관이 없다.
import { Container, Button, Form, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled.div`
  .navi-box {
    opacity: 0.5;
    transition: all 0.2s;
    &:hover {
      opacity: 1;
    }
  }
  .inner-item {
    padding: 0px 15px;
  }
  .me-2 {
    padding: 2px 14px;
    font-size: 1.6rem;
    position: relative;
    top: -5px;
  }
  button[type="button"] {
    font-size: 1.8rem;
    padding: 2px 14px;
    position: relative;
    top: -5px;
  }
`;

const Logo = styled.img`
  width: 110px;
  margin-right: 15px;
`;

const BtnItem = styled.span`
  color: var(--dark-color);
  transition: all 0.3s;
  margin-right: 10px;
  font-size: 1.8rem;
  i {
    margin-right: 7px;
  }
  &:hover {
    color: var(--accent-color);
  }
`;

const Navigation = () => {
  return (
    <Wrapper>
      <Navbar className="navi-box" variant="lignt" bg="light">
        <Container fluid className="inner-item">
          <Navbar.Brand href="/">
            <Logo
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/2560px-Disney%2B_logo.svg.png"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">
                <BtnItem>
                  <i className="fa-solid fa-house"></i>Home
                </BtnItem>
              </Nav.Link>
              <Nav.Link href="/movies">
                <BtnItem>
                  <i className="fa-solid fa-film"></i>Movie
                </BtnItem>
              </Nav.Link>
              <Nav.Link href="/movies">
                <BtnItem>
                  <i className="fa-solid fa-tv"></i>Series
                </BtnItem>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Wrapper>
  );
};

export default Navigation;
