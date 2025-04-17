import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// link 사용자의 액션값에 따라 직관적으로 이동하고자 할때 = a태그처럼 쓰인다. 보다 쉽다.(조건x)
// useNavigate 함수처럼 쓰이는 것이다. 조건에 부합하면 이동하는 기능을 구현하는 건데 보다 고도의 방법
import {
  faBars,
  faClose,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  width: 150px;
  padding-top: 20px;
  margin-bottom: 30px;
  background: #fff;
  & img {
    width: 100%;
  }
`;

const MenuArea = styled.ul`
  display: flex;
  gap: 40px;
  font-weight: 600;
`;

const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: absolute;
  top: 20px;
  right: 20px;
`;

const SearchBox = styled.div`
  & > input {
    width: 130px;
    border: none;
    border-bottom: 1px solid var(--dark-color);
    padding: 4px 6px;
    font-size: 1.4rem;
    &::placeholder {
      opacity: 1;
      transition: opacity 0.3s;
    }
    &:focus {
      outline: none;
      &::placeholder {
        opacity: 0;
      }
    }
  }
`;

const LoginAuth = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  font-size: 1.5rem;
`;

const ToggleButton = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  cursor: pointer;
  font-size: 2rem;
`;

const SideMenu = styled.div`
  width: ${({ width }) => `${width}px`};
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: var(--dark-color);
  color: var(--light-color);
  z-index: 1;
  transition: all 0.3s;
  overflow: hidden;
  & > svg {
    position: absolute;
    top: 30px;
    right: 30px;
    font-size: 2.2rem;
    cursor: pointer;
  }
  & > ul {
    display: flex;
    flex-direction: column;
    gap: 40px;
    font-size: 1.8rem;
    padding: 70px 40px;
    margin-top: 10px;
    & > li {
      cursor: pointer;
    }
  }
`;

const menuList = [
  "JACKETS",
  "TOPS",
  "BOTTOMS",
  "STUFFS",
  "BEST",
  "NEW",
  "COLLABORATION",
  "SALE",
];

const Navbar = ({ authenticate, setAuthenticate }) => {
  const [width, setWidth] = useState(0);
  const navigate = useNavigate();

  const onCheckEnter = (e) => {
    if (e.key === "Enter") navigate(`?q=${e.target.value}`);
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <Container>
      <Logo>
        <Link to={"/"}>
          <img
            src="https://fetch-sunday.com/fetch/new_fetch_logo.png"
            alt="kream"
          />
        </Link>
      </Logo>
      <MenuArea className="menu">
        {menuList.map((menu, index) => (
          <li key={index}>
            <a href="#">{menu}</a>
          </li>
        ))}
      </MenuArea>
      <HeaderTop>
        <SearchBox>
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="상품검색" onKeyDown={onCheckEnter} />
        </SearchBox>
        {authenticate ? (
          <>
            <FontAwesomeIcon icon={faSearch} />
            <LoginAuth onClick={() => setAuthenticate(false)}>
              <FontAwesomeIcon icon={faUser} />
              <span>로그아웃</span>
            </LoginAuth>
          </>
        ) : (
          <LoginAuth onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            <span>로그인</span>
          </LoginAuth>
        )}
      </HeaderTop>
      <SideMenu width={width}>
        <FontAwesomeIcon icon={faClose} onClick={() => setWidth(0)} />
        <ul className="side-menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
      </SideMenu>
      <ToggleButton>
        <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
      </ToggleButton>
    </Container>
  );
};

export default Navbar;
