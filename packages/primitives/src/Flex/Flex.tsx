import React from 'react';
import { Flex as RebassFlex, FlexProps as RebassFlexProps } from 'rebass';

interface FlexProps extends RebassFlexProps {
  children?: React.ReactNode;
}

function Flex({ children, ...props }: FlexProps): JSX.Element {
  return <RebassFlex {...props}>{children}</RebassFlex>;
}

export { Flex, FlexProps };
