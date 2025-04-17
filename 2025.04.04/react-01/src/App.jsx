import { useState } from "react";
import GlobalStyles from "./styles/GlobalStyles.styles";
import styled from "styled-components";
import Box from "./components/Box";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

const BoxGroup = styled.div`
  /* width: 100%;
  height: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const ButtonGroup = styled.div`
  /* width: 100%;
  height: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Button = styled.div`
  width: 80px;
  padding: 10px 0;
  border: none;
  border-radius: 8px;
  background-color: #eee;
  text-align: center;
  cursor: pointer;
  &:active {
    box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.5);
  }
`;

const choice = {
  scissors: {
    name: "scissors",
    img: "https://mblogthumb-phinf.pstatic.net/MjAxNzEwMTVfNzQg/MDAxNTA4MDQ3MjY0Njcz.igWGtJgFroZ0y_B5k1MZQ3a6iUvmloX7Ix5O3gt-Fw4g.JCUNvdBLVB5YreDyRg1p_WBN3CMubRLiaT3Z9DYbQsUg.PNG.gyrlf9031/%EA%B0%80%EC%9C%84%EB%A1%9C_%EC%A3%BC%EB%A8%B9%EC%9D%B4%EA%B8%B0%EB%8A%94_%EB%B0%A9%EB%B2%95.PNG?type=w420",
  },
  rock: {
    name: "rock",
    img: "https://nas.battlepage.com/upload/2019/0727/27115047ff999942cf3b17ed3260f3d3ede9bd1d.jpg",
  },
  paper: {
    name: "paper",
    img: "https://i.ytimg.com/vi/dsmpKyTDOCY/maxresdefault.jpg",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "비겼어요 🤨";
    } else if (user.name === "rock") {
      return computer.name === "scissors" ? "이겼다! 😆" : "졌다 😣";
    } else if (user.name === "scissors") {
      return computer.name === "paper" ? "이겼다! 😆" : "졌다 😣";
    } else if (user.name === "paper") {
      return computer.name === "rock" ? "이겼다! 😆" : "졌다 😣";
    }
  };

  const randomChoice = () => {
    // key 값만 배열에서 추출해서 써야 하기 때문에 object.keys()를 써야한다.
    const itemArray = Object.keys(choice);
    const randomItem = Math.floor(Math.random() * itemArray.length); // 0~2까지 사이의 아이템이 나온다.
    const final = itemArray[randomItem]; // 배열안에 넣어준다면 랜덤으로 나오게 된다.
    return choice[final];
  };

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    const computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  return (
    <>
      <GlobalStyles />
      <Container>
        <BoxGroup>
          <Box title="You" item={userSelect} result={result} />
          <Box title="Computer" item={computerSelect} result={result} />
        </BoxGroup>
        <ButtonGroup>
          <Button onClick={() => play("scissors")}>가위</Button>
          <Button onClick={() => play("rock")}>바위</Button>
          <Button onClick={() => play("paper")}>보자기</Button>
        </ButtonGroup>
      </Container>
    </>
  );
}

export default App;
