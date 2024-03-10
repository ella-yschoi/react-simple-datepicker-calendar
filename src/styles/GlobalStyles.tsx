import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-family: 'Noto Sans KR', sans-serif;
    word-break: keep-all;

  * {
      -ms-overflow-style: none; 
      scrollbar-width: none; 
      ::-webkit-scrollbar {
        display: none; 
      }
    }
  }

  body, html, #root {
    width: 100%;
    height: 100%;
  }

  button {
    cursor: pointer;
    background: transparent;
  }
`;

export default GlobalStyle;
