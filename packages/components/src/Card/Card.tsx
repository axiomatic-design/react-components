import React from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { Flex, BoxProps } from '../';

interface CardProps extends BoxProps {
  children: React.ReactNode;
}

const CardWrapper = styled(Flex)<CardProps>(
  css({
    flexDirection: 'column',
    borderRadius: 'default',
    padding: 4,
    backgroundColor: 'cardDefault',
  }),
  ({ ax }) => css(ax),
);

function Card({ ...props }: CardProps): JSX.Element {
  return <CardWrapper {...props} />;
}

export { Card };
