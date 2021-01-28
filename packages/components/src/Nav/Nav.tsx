import React from 'react';
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

function Nav({ items }: NavProps): JSX.Element {
  return (
    <Box
      as="nav"
      ax={{
        marginLeft: 'auto',
      }}
    >
      {items.map(({ label, href, active }) => (
        <Link
          key={label}
          href={href}
          ax={{
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
          }}
        >
          {label}
        </Link>
      ))}
    </Box>
  );
}

export { Nav, NavProps };
