import { createGlobalStyle } from 'styled-components'

export const colors = {
  black: '#000',
  white: '#fff',
  red: '#c72c2c',
  darkRed: '#8c1f1f',
  grey: '#b3b3b3',
  green: '#209e43',
  darkGreen: '#16702f',
  blue: '#4778cc',
  darkBlue: '#0e316e'
}

export const spaces = {
  regular: '2rem',
  half: '1rem',
  double: '4rem'
}

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    overflow-x: hidden;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  ul,
  li,
  a,
  button,
  input,
  textarea {
    color: inherit;
    margin: 0;
    padding: 0;
  }

  ul,
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    appearance: button;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    text-transform: none;
  }

  input,
  textarea {
    background: transparent;
    border: none;
    outline: none;
    resize: none;
  }
`

export default GlobalStyles
