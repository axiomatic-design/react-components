import React from 'react';
import { Box as RebassBox, BoxProps as RebassBoxProps } from 'rebass';

interface BoxProps extends RebassBoxProps {
  children?: React.ReactNode;
}

function Box({ children, ...props }: BoxProps): JSX.Element {
  return <RebassBox {...props}>{children}</RebassBox>;
}

export { Box, BoxProps };
