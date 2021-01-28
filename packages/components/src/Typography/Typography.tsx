import React from 'react';
import { Box, BoxProps } from '../';

interface TextProps extends BoxProps {
  children: React.ReactNode;
}

function Text({ ...props }: TextProps): JSX.Element {
  return (
    <Box
      as="p"
      {...props}
      base={{
        color: 'copy',
        lineHeight: 'body',
        fontSize: 2,
        marginBottom: 4,
      }}
    />
  );
}

function Heading({ ...props }: TextProps): JSX.Element {
  return (
    <Box
      as="h2"
      {...props}
      base={{
        fontFamily: 'heading',
        letterSpacing: 'tight',
        color: 'headings',
        fontSize: 4,
        lineHeight: 'headings',
        marginBottom: 3,
      }}
    />
  );
}

function SubHeading({ ...props }: TextProps): JSX.Element {
  return (
    <Box
      as="h3"
      {...props}
      base={{
        fontFamily: 'body',
        fontWeight: 'bold',
        fontSize: 3,
        marginBottom: 3,
        color: 'headings',
      }}
    />
  );
}

function Eyebrow({ ...props }: TextProps): JSX.Element {
  return (
    <Box
      as="h4"
      {...props}
      base={{
        letterSpacing: 'tight',
        color: 'eyebrow',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 2,
      }}
    />
  );
}

export { Text, Heading, Eyebrow, SubHeading };
