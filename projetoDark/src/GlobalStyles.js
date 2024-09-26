import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.30s  linear;
}

header {
    background: ${({ theme }) => theme.header};
    color: ${({ theme }) => theme.text};
    transition: all 0.30s linear;
}

/* button {
    background: ${({ theme }) => theme.button};
    color: ${({ theme }) => theme.text};
    transition: all 0.30s  linear;
} */

`