import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ul, li {
        list-style: none;
    }

    input {
        border: none;

        &:focus {
            outline: none;
        }
    }

    button {
        font-family: inherit;
        background: transparent;
        border: none ;
        outline: none;
        cursor: pointer;
    }

    body {
        font-family: 'Montserrat', sans-serif;
    }
`;
