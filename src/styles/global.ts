import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }

    body, input, button, textarea, select {
        font-family: 'Poppins', sans-serif;
        color: ${({theme}) => theme.black};
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

`