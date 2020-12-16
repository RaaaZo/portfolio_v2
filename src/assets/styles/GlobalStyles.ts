import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    :root {
        --navigation-background: #37393D;
        --home-background: #1B1B1B;
        --pages-background: #E1E1E1;
        --green: #00C896;
        --pink: #FF00FF;
        --white: #F1F1F1;
    }
    * {
        box-sizing: border-box;
    }
    html {
        font-size: 10px;
    }
    body {
        overflow-x: hidden;
        font-size: 2rem;
        background-color: var(--home-background);
        font-family: "Lato", sans-serif;
    }
    h1 {
        font-family: "Dancing Script", sans-serif;
    }

    /* Scrollbar Styles */
    body::-webkit-scrollbar {
        width: 12px;
    }
    html {
        scrollbar-width: thin;
        scrollbar-color: var(--green) var(--white);
    }
    body::-webkit-scrollbar-track {
        background: var(--white);
    }
    body::-webkit-scrollbar-thumb {
        background-color: var(--green) ;
        border-radius: 6px;
        border: 3px solid var(--white);
    }
`

export default GlobalStyles
