import React from 'react';
import { ThemeProvider, Global, css } from '@emotion/react';
import { Helmet } from 'react-helmet';
import emotionReset from 'emotion-reset';

import { borders, colors, radii, shadows, space, typography } from './tokens';
import { buttons } from './buttons';

const {
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
} = typography;

const theme = {
  borders,
  buttons,
  colors,
  radii,
  shadows,
  space,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
} as const;

function GlobalStyle(): JSX.Element {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Alice&display=swap"
        />
      </Helmet>
      <Global
        styles={css`
          ${emotionReset}

          *, *::after, *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
          }

          *:focus {
            outline: 0;
            box-shadow: 0 0 0 3px ${colors.outline};
          }

          ::selection {
            background: ${colors.selection};
          }

          body {
            font-family: ${fonts.body};
          }
        `}
      />
    </>
  );
}

export { theme, GlobalStyle, ThemeProvider };
