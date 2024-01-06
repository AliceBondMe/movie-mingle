import { createGlobalStyle, keyframes } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  --basic-dark: ${({ $theme }) => ($theme === 'dark' ? '#fafafa' : '#0e2f2d')};
  --basic-light: ${({ $theme }) => ($theme === 'dark' ? '#0e2f2d' : '#e4f8f1')};
  --bg-gradient: ${({ $theme }) =>
    $theme === 'dark' ? '#20635d' : '#fafcfbd2'};
  --accent: ${({ $theme }) => ($theme === 'dark' ? '#094a44' : '#266861')};
  --additional: ${({ $theme }) => ($theme === 'dark' ? '#073e3a' : '#094a44')};
  --basic-white: #ffffff;
  --basic-transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Raleway', 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        font-size: 18px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: var(--basic-light);
        color: var(--basic-dark);
        transition: all var(--basic-transition);
    }

    p, h1, h2, h3 {
        margin: 0;
    }

    ul, ol {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    img {
    display: block;
    max-width: 100%;
    height: auto;
}
`;

export const fadeIn = keyframes`
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
