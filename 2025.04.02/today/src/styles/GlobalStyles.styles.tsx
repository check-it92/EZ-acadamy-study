import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  *{
    box-sizing: border-box;
  }

  ul,li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    /* background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor} */
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

  }

  :root {
    --light-color: #fff;
    --dark-color: #000;
    --border-color: #ccc;
    --accent-color: #dc143c;
    --button-color: #ff5722;
  }
`;

export default GlobalStyles;
