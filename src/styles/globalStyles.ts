import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--white);
  }
  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif;
  }
  html {
    background: var(--primary);
  }
  :root {
    --primary: #15202B;
    --secondary: #15181C;
    --search: #202327;
    --primary-transparency: #1e2b38d0;
    --white: #D9D9D9;
    --gray: #7A7A7A;
    --gray-transparency: #7a7a7a11;
    --outline: #3a4146;
    --retweet: #00C06B;
    --like: #E8265E;
    --twitter: #33A1F2;
    --twitter-dark-hover: #0C385A;
    --twitter-light-hover: #2C8ED6;
  }
`;