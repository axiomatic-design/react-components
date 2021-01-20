import React from 'react';
import { Text as RebassText, TextProps as RebassTextProps } from 'rebass';

interface TextProps extends RebassTextProps {
  children: React.ReactNode;
}

function Text({ children, ...props }: TextProps): JSX.Element {
  return (
    <RebassText as="p" variant="display" {...props}>
      {children}
    </RebassText>
  );
}

export { Text, TextProps };
