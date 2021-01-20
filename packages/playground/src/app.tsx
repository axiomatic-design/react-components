import React from 'react';
import {
  theme,
  GlobalStyle,
  ThemeProvider,
  Box,
} from '@axiomatic/react-components';

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Box>Hello</Box>
      <Box as="main">Main box</Box>
    </ThemeProvider>
  );
}
