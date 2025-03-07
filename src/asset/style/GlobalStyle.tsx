import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    overflow-y: overlay;
    margin: 0 auto;
    width: 100%;
    background-color: #151515;
    color: #ffffff;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 100px;
  }

  ::-webkit-scrollbar-thumb {
    outline: none;
    border-radius: 10px;
    border: 4px solid transparent;
    background: red;
  }


  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export default GlobalStyle;
