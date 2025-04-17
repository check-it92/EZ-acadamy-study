import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
// 스타일컴포넌트를 사용하면서 전역변수를 사용하게 해주는 필수요소!!
// 1. 전역변수 적용 요소  2. reset 초기 설정 요소 밑에 ${}로 적용용

const GlobalStyles = createGlobalStyle`
${reset}
:root {
  --primary-light-color: #fff;
  --primary-dark-color: #000;
  --border-color: #ccc;

}
`;

export default GlobalStyles;
