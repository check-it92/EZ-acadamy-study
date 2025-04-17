import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { array } from "yargs";

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 250px;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 50vw;
  & > div {
    &:first-child,
    &:last-child {
      grid-column: span 2;
    }
  }
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  /* width: 400px; */
  height: 400px;
  background: var(--light-color);
  border-radius: 40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [clicked, setClicked] = useState(false);

  // const toggle = () => {
  //   setClicked((prev) => !prev);
  // };

  const [id, setId] = useState<null | string>(null);
  // <> 제네릭타입(껍데기): a타입이면서 b타입일수도 있다. 둘다 적용시켜야할때를 (유니온타입)
  const arr = ["1", "2", "3", "4"];
  //타입스크립트 특성 layoutId를 쓰기위해 문자열로 배열을 써야한다.

  return (
    <Wrapper>
      <Grid>
        {arr.map((n) => (
          <Box onClick={() => setId(n)} key={n} layoutId={n} />
        ))}
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Box layoutId={id} style={{ width: 400, height: 200 }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;

// 좌우로 이동하면서 내가 선택한 곳의 부분을 가독성을 높여주던가?
// 아님 모달페이지 창을 띄울때 애니메이션을 줄수 있다.
