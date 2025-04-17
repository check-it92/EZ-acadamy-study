import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: var(--light-color);
  border-radius: 40px;
  margin: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  position: absolute;
  top: 230px;
`;

const BoxList = styled.div`
  display: flex;
  gap: 20px;
`;

// 타입스크립트 정의!
// 소괄호를 쓰는 이유는 종결시키지 않기 위해서
const box = {
  initial: (back: boolean) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  exits: (back: boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0,
    rotateX: 180,
    transition: {
      duration: 0.5,
    },
  }),
};

function App() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const prevPlease = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setBack(true);
    setVisible((prev) => (prev === 1 ? 10 : prev - 1));
  };

  const nextPlease = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setBack(false);
    setVisible((prev) => (prev === 10 ? 1 : prev + 1));
  };

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Wrapper>
      <AnimatePresence custom={back}>
        {arr.map((i) =>
          i === visible ? (
            <Box
              custom={back}
              key={visible}
              variants={box}
              initial="initial"
              animate="visible"
              exit="exits"
              onAnimationComplete={() => setIsAnimating(false)}
            >
              {visible}
            </Box>
          ) : null
        )}
      </AnimatePresence>
      <BoxList>
        <button onClick={prevPlease}>Prev</button>
        <button onClick={nextPlease}>Next</button>
      </BoxList>
    </Wrapper>
  );
}

export default App;

/*
{showing ? <Box /> : null}
삼항논리로 마운트와 언마운트를 나누는 경계
박스가 나오게 함으로, 사라지게 함으로 생애주기를 나눈것이다. 
박스의 운명을 보여지게, 사라지게, 애니메션이 되었을땐 따로 쥐여진것

onAnimationComplete : 애니메이션이 종료가 된다면 해당값으로 값을 바꿔줘라
0 -> 1 -> 0 -> 2 -> 0 -> 3 이동하고 초기 다시 이동 초기 ...느낌
*/
