import React from 'react';
import { Box } from '@axiomatic/primitives';
import { Flow } from '@axiomatic/layout';

interface NavBarProps {
  children: React.ReactNode;
  fixed?: boolean;
}

function NavBar({ children }: NavBarProps): JSX.Element {
  return (
    <Box width="100%" backgroundColor="white" marginBottom={3} as="nav">
      <Flow
        gap={3}
        width="900px"
        marginX="auto"
        height={75}
        alignItems="center"
      >
        {children}
      </Flow>
    </Box>
  );
}

export { NavBar, NavBarProps };
