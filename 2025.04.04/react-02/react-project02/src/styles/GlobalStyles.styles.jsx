import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const Globalstyles = createGlobalStyle`
  ${reset}

  *{
    box-sizing: border-box;
  }

  ul,li {
    list-style: none;
  }

  a{ 
    text-decoration: none;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    background: url("https://i3.ruliweb.com/img/21/11/02/17ce112c8ce27693f.jpg") center/cover no-repeat;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  :root {
    --light-color: #fff;
    --dark-color: #000;
    --border-color: #ccc;
    --accent-color: #dc143c;
  }
`;

const GlobalStylesstyles = () => {
  return <div>GlobalStyles.styles</div>;
};

export default Globalstyles;
