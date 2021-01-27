import React from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { Flex, BoxProps } from '../';

const CardWrapper = styled(Flex)(
  css({
    flexDirection: 'column',
    borderRadius: 'default',
    padding: 4,
    backgroundColor: 'cardDefault',
  }),
);

function Card({ ...props }: BoxProps): JSX.Element {
  return <CardWrapper {...props} />;
}

export { Card };
