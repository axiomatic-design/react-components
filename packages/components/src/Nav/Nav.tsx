import React from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { Box } from '../';
import { Link } from '../Link';

type NavItem = {
  label: string;
  href: string;
  active?: boolean;
};

interface NavProps {
  items: NavItem[];
}

const NavLink = styled(Link)<{ active?: boolean }>(({ active }) =>
  css({
    color: 'navLink',
    marginLeft: 4,
    textDecoration: 'none',
    position: 'relative',
    '&::after': active
      ? {
          content: '""',
          position: 'absolute',
          bottom: '-8px',
          left: '-2px',
          right: '-2px',
          height: '3px',
          backgroundColor: 'primary',
          borderRadius: '3px',
        }
      : {},
  }),
);

function Nav({ items }: NavProps): JSX.Element {
  return (
    <Box as="nav" marginLeft="auto">
      {items.map(({ label, href, active }) => (
        <NavLink key={label} label={label} href={href} active={active} />
      ))}
    </Box>
  );
}

export { Nav, NavProps };
