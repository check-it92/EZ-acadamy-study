import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Container, Row, Col, Dropdown, Button } from "react-bootstrap";

const Img = styled.img``;

const ProductDesc = styled.div``;

const ProductTitle = styled.div``;

const ProductPrice = styled.div``;

const ProductChoice = styled.div``;

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const getProductDetail = async () => {
    const url = `http://localhost:3000/products/${id}`; //http://localhost:3000/products/1 원래 이걸로 값을 주는 데 아이디 값을 변수를 이용해서 유연하게 만들어주었다
    const response = await fetch(url);
    const data = await response.json();
  };

  useEffect(() => {
    getProductDetail();
  }, []); //컴포넌트가 마운트가 되는 순간 getProductDetail이라는 함수실행
  return (
    <Container>
      <Row>
        <Col>
          <Img src={product && product?.img} alt={product && product?.id} />
        </Col>
        <Col>
          <ProductDesc>
            <ProductTitle>상품명 : {product && product?.title}</ProductTitle>
            <ProductPrice>상품가격 : {product && product?.price}</ProductPrice>
            <ProductChoice></ProductChoice>
            <Dropdown></Dropdown>
            <Button variant="dark">장바구니</Button>
            <Button variant="danger">상품결제</Button>
          </ProductDesc>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
