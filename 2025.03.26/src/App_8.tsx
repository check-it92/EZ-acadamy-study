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
`;

const boxVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacitiy: 1,
    scale: 1,
    ratateZ: 360,
  },
  leaving: {
    opacity: 0,
    y: 20,
  },
};

function App() {
  const [showing, setShowing] = useState(false);
  // 기본적으로 안보이게 초기설정
  const toggleShowing = () => {
    setShowing((prev) => !prev);
    // 특정요소가 사라지게 하거나, 나타나게 하는 구문!!
  };
  return (
    <Wrapper>
      <button onClick={toggleShowing}>Click</button>
      <AnimatePresence>
        {showing ? (
          <Box
            variants={boxVariants}
            initial="initial"
            animate="visible"
            exit="leaving"
          />
          // 하나의 문법이다. initial ~ exit 까지
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;

/*
{showing ? <Box /> : null}
삼항논리로 마운트와 언마운트를 나누는 경계
박스가 나오게 함으로, 사라지게 함으로 생애주기를 나눈것이다. 
박스의 운명을 보여지게, 사라지게, 애니메션이 되었을땐 따로 쥐여진것
*/
