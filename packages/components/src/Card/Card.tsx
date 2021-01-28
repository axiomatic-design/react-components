import React from 'react';
import { Flex, BoxProps } from '../';

interface CardProps extends BoxProps {
  children: React.ReactNode;
}

function Card({ ...props }: CardProps): JSX.Element {
  return (
    <Flex
      {...props}
      base={{
        flexDirection: 'column',
        borderRadius: 'default',
        padding: 4,
        backgroundColor: 'cardDefault',
      }}
    />
  );
}

export { Card, CardProps };
