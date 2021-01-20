import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'emotion-theming';
import reset from 'styled-reset';
import { Helmet } from 'react-helmet';
import {
  borders,
  colors,
  radii,
  shadows,
  spacing as space,
  typography,
} from '@axiomatic/tokens';

import { text } from './text';
import { buttons } from './buttons';
import { variants } from './variants';

const { fonts, fontSizes, fontWeights, lineHeights } = typography;

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
  text,
  variants,
};

const StyleReset = createGlobalStyle`
    ${reset}
`;

function GlobalStyle(): JSX.Element {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Volkhov:ital,wght@0,400;0,700;1,700&display=swap"
        />
      </Helmet>
      <StyleReset />
    </>
  );
}

export { theme, GlobalStyle, ThemeProvider };
