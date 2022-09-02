import styled, { createGlobalStyle } from 'styled-components';

export const darkGrey = '#63666A';
export const lightGrey = '#b4d6db';
export const midGrey = '#dad9d9'

const GlobalStyle = createGlobalStyle`
    body {
        color: ${darkGrey};
        background-color: ${lightGrey};
        font-family: 'Fira Sans', sans-serif;
    }
`

export default GlobalStyle;