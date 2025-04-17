import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  *{
    box-sizing: border-box;
  }

  ul, li{
    list-style: none;
  }

  a{
  text-decoration: none;
  }

:root {
  --light-color: #fff;
  --dark-color: #000;
  --border-color: #ccc;
  --accent-color: #f00;
}

body {
  background: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
}
`;

export default GlobalStyles;
