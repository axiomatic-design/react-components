import React from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { Box } from '../';

interface LinkProps {
  label: string;
  href: string;
}

const LinkContainer = styled(Box)<LinkProps>(({ sx }) =>
  css({
    color: 'primary',
    transition: 'color 0.2s ease-in-out',
    textDecoration: 'underline',
    '&:hover': {
      color: 'copy',
    },
    ...sx,
  }),
);

function Link({ label, href, ...props }: LinkProps): JSX.Element {
  return (
    <LinkContainer as="a" href={href} {...props}>
      {label}
    </LinkContainer>
  );
}

export { Link, LinkProps };
