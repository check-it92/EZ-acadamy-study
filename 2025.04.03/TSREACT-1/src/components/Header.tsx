import styled from "styled-components";

const Container = styled.div`
  background: var(--light-color);
  margin-bottom: 20px;
  padding: 20px;
  width: calc(100% - 40px);
`;

const Title = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
`;

const Header = () => {
  return (
    <Container>
      <Title>블로그 POST</Title>
    </Container>
  );
};

export default Header;
