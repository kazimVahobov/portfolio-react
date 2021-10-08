import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    --dark-bg: #262626;
    --deep-dark: #1e1e1e;
    --gray: #363636;
    --light-gray: #bcb4b4;
    --white: #ffffff;
    --black: #000000;
  }

  html {
    font-size: 10px;
    background-color: var(--dark-bg);
    font-family: 'Roboto Mono', serif;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img, svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export default GlobalStyle
