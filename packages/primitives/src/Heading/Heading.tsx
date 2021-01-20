import React from 'react';
import {
  Heading as RebassHeading,
  HeadingProps as RebassHeadingProps,
} from 'rebass';

interface HeadingProps extends RebassHeadingProps {
  children: React.ReactNode;
}

function Heading({ children, ...props }: HeadingProps): JSX.Element {
  return <RebassHeading {...props}>{children}</RebassHeading>;
}

export { Heading, HeadingProps };
