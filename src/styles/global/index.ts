import { createGlobalStyle } from 'styled-components';

const ColorsCSS = createGlobalStyle`
  :root {
    --color-primary: ${({ theme }) => theme.colors.primary};
    --color-background100: ${({ theme }) => theme.colors.background100};
  }
`;
const FontsCSS = createGlobalStyle`
  :root {
    --font-size: ${({ theme }) => theme.fonts.size};
    --font-primary: ${({ theme }) => theme.fonts.primary};
  }
`;
const RootCSS = createGlobalStyle`
  :root {
    --max-width: 1024px;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    overflow-x: hidden;
    font-size: var(--font-size);
  }
  body {
    padding: 0 !important;
    font-family: var(--font-primary);
  }
  button {
    border: none;
    cursor: pointer;
    background-color: transparent;
    font-size: 1rem;
  }
  a {
    color: inherit;
    text-decoration: none;
    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }
  }
  abbr {
    text-decoration: none;
  }
  ul,
  li {
    list-style: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-primary);
  }

  .mx-w {
    margin: 0 auto;
    max-width: calc(
      100% - 2rem
    ); // 100% - margin-left (1rem) - margin-right (1rem)
    @media (min-width: 1024px) {
      max-width: var(--max-width);
      margin: 0 auto;
    }
  }

  img.flag {
    width: 1.5rem;
    margin-top: 0.4rem;
    border-radius: 0.2rem;
  }
`;

export const GlobalStyles = {
  ColorsCSS,
  FontsCSS,
  RootCSS,
};
