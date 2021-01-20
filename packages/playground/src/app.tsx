import React from 'react';
import { theme, GlobalStyle, ThemeProvider } from '@axiomatic/themes';
import { DataCard } from '@axiomatic/elements';
import { Flow } from '@axiomatic/layout';

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Flow margin={4} gap={4} flexWrap="wrap">
        <DataCard
          title="Data Card"
          subtitle="Subheading of this card"
          dataScore={4}
          dataScoreColor="green"
          dataScoreReason="You have achieved your dreams congrats"
        />
        <DataCard
          title="Data Card"
          subtitle="Subheading of this card"
          dataScore={4}
          dataScoreColor="green"
          dataScoreReason="You have achieved your dreams congrats"
        />
        <DataCard
          title="Data Card"
          subtitle="Subheading of this card"
          dataScore={4}
          dataScoreColor="green"
          dataScoreReason="You have achieved your dreams congrats"
        />
      </Flow>
    </ThemeProvider>
  );
}
