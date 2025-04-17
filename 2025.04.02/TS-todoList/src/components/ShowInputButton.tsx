import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  z-index: 1;
  position: absolute;
  right: 40px;
  bottom: 40px;
`;

interface Props {
  readonly show: boolean;
  readonly onClick: () => void; // 반환하지 않고 실행만 하는 함수(on, off)
}

const ShowInputButton = ({ show, onClick }: Props) => {
  return (
    <Container>
      <Button
        label={show ? "닫기" : "+ ADD TO DO"}
        color={show ? undefined : "#304ffe"}
        onClick={onClick} // 리팩토링 완료
      />
    </Container>
  );
};

export default ShowInputButton;
