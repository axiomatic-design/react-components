import React from 'react';
import { Link as RebassLink, LinkProps as RebassLinkProps } from 'rebass';

interface LinkProps extends RebassLinkProps {
  children: React.ReactNode;
}

function Link({ children, ...props }: LinkProps): JSX.Element {
  return <RebassLink {...props}>{children}</RebassLink>;
}

export { Link, LinkProps };
