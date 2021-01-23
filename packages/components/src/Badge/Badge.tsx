import React from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { Flex } from '../';

interface BadgeProps {
  pill?: boolean;
  backgroundColor: string;
  color: string;
}

const BadgeContainer = styled(Flex)<BadgeProps>((props) =>
  css({
    backgroundColor: props.backgroundColor || 'tag',
    color: props.color || 'tagText',
    borderRadius: props.pill ? 'pill' : 'default',
    paddingX: 2,
    paddingY: 1,
    fontSize: '12px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 'tight',
  }),
);

function Badge({
  pill,
  backgroundColor,
  color,
  ...props
}: BadgeProps): JSX.Element {
  return (
    <BadgeContainer
      pill={pill}
      backgroundColor={backgroundColor}
      color={color}
      {...props}
    />
  );
}

export { Badge, BadgeProps };
