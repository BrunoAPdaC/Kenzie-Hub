import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root{
        --color-primary: #27AE60;

    }
    
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        text-decoration: none;
        font-family: Inter;
    }
    
    background: #121214;
    border-radius: 8px;
    
`;
export default GlobalStyle;
