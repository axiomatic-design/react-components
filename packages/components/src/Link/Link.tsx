import React from 'react';
import { Box, BoxProps } from '../';
interface LinkProps extends BoxProps {
  href: string;
  children?: React.ReactNode;
}

function Link({ ...props }: LinkProps): JSX.Element {
  return (
    <Box
      as="a"
      {...props}
      base={{
        color: 'primary',
        transition: 'color 0.2s ease-in-out',
        textDecoration: 'underline',
        '&:hover': {
          color: 'copy',
        },
      }}
    />
  );
}

export { Link, LinkProps };
