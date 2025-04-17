import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { productActions } from "../redux/actions/productActions";
import { fetchProducts } from "../redux/reducers/productSlice";

const ProductAll = () => {
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);

  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    dispatch(fetchProducts(searchQuery));
  };
  // 상단의 검색값을 따라서 값을 찾아오기 위해 서치쿼리를 만듦
  // 검색어가 없다면 빈문자열 반환

  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <Container>
      <Row className="justify-content-center">
        {productList.map((menu, index) => (
          <Col className="mb-4" key={index} xs={12} sm={6} md={4} lg={3}>
            <ProductCard item={menu} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
