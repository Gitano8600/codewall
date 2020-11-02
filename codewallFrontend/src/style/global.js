import { createGlobalStyle } from "styled-components/macro";

export const GlobalStyle = createGlobalStyle`
    html, body {
    margin: 0;
    padding: 0;
    }
    *, *::after, *::before {
        box-sizing: border-box;
    }
    body {
        align-items: center;
        background: ${({ theme }) => theme.primaryDark};
        color: ${({ theme }) => theme.primaryLight};
        display: flex;
        flex-direction: column;
        font-family: 'DM Mono', monospace;
        height: 100vh;
        justify-content: center;
        text-rendering: optimizeLegibility;
    }
`;

export const defaultTheme = {
    // Colors:


    // Box Shadows:


    // Properties


    // Sizes


    // Text

};