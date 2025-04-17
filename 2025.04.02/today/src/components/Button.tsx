import React, { Component } from "react"; // component => 슈퍼타입의 컴포넌트
import styled from "styled-components";

const Container = styled.button`
  border: none;
  border-radius: 4px;
  background: var(--button-color);
  color: var(--light-color);
  padding: 8px 16px;
  cursor: pointer;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

// 객체 타입선언(-> interface) 활용
interface Props {
  readonly label: string; // 함부로 못바꾸게 readonly 읽기전용으로 막아두기
  readonly onClick?: () => void;
}

// const Button = ({ label, onClick }: Props) => {
//   return <Container onClick={onClick}>{label}</Container>;
// };

class Button extends Component<Props> { // 미정이기때문에 <>제네릭타입으로 props 라는 이름으로 변수를 넣음
  //Method 함수만 있으면 된다. => render만 쓴다.
  render() {
    const { label, onClick } = this.props; // this 는 인스턴스객체이다.
    return <Container onClick={onClick}>{label}</Container>;
  }
}

export default Button;
