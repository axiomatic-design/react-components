import React from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { Box, BoxProps } from '../';
interface LinkProps extends BoxProps {
  href: string;
  children?: React.ReactNode;
}

const LinkContainer = styled(Box)<LinkProps>(
  css({
    color: 'primary',
    transition: 'color 0.2s ease-in-out',
    textDecoration: 'underline',
    '&:hover': {
      color: 'copy',
    },
  }),
  ({ ax }) => css(ax),
);

function Link({ href, ...props }: LinkProps): JSX.Element {
  return <LinkContainer as="a" href={href} {...props} />;
}

export { Link, LinkProps };
