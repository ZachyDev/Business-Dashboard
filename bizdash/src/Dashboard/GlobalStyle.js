import styled, { createGlobalStyle } from 'styled-components';

const darkGrey = '#63666A';
const lightGrey = '#b4d6db';

const GlobalStyle = createGlobalStyle`
    body {
        color: ${darkGrey};
        background-color: ${lightGrey};
        font-family: 'Fira Sans', sans-serif;
    }
`

export default GlobalStyle;