import React from 'react';
import { Flex, FlexProps } from '@axiomatic/primitives';

interface StackProps extends FlexProps {
  children?: React.ReactNode;
  gap?: number;
}

function Stack({ children, gap, sx, ...props }: StackProps): JSX.Element {
  return (
    <Flex
      flexDirection="column"
      {...props}
      sx={{ display: 'grid', gridGap: gap, ...sx }}
    >
      {children}
    </Flex>
  );
}

export { Stack, StackProps };
