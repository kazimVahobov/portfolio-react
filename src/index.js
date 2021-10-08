import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import GlobalStyle from "./assets/style/styles";
import Typography from "./assets/style/fonts";

ReactDOM.render(
    <>
        <GlobalStyle/>
        <Typography/>
        <App/>
    </>,
    document.getElementById('root')
);
