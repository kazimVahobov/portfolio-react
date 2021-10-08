import {createGlobalStyle} from "styled-components";
import RobotoMonoRegular from "../fonts/RobotoMono-Regular.ttf";
import MontserratBold from "../fonts/Montserrat-Bold.ttf";
import MontserratSemiBold from "../fonts/Montserrat-SemiBold.ttf";

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'RobotoMono Regular';
    font-style: normal;
    src: url(${RobotoMonoRegular});
  }

  @font-face {
    font-family: 'Montserrat Bold';
    font-style: normal;
    src: url(${MontserratBold});
  }

  @font-face {
    font-family: 'Montserrat SemiBold';
    font-style: normal;
    src: url(${MontserratSemiBold});
  }

  html {
    font-family: 'RobotoMono Regular', serif;
    color: var(--light-gray);
  }

  * {
    font-family: 'RobotoMono Regular', serif;
    color: var(--light-gray);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat SemiBold', serif
  }
`;

export default Typography;
