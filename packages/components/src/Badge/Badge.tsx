import React from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { Flex, BoxProps } from '../';

interface BadgeProps extends BoxProps {
  pill?: boolean;
  backgroundColor?: string;
  color?: string;
  children: React.ReactNode;
}

const BadgeContainer = styled(Flex)<BadgeProps>(
  (props) =>
    css({
      backgroundColor: props.backgroundColor,
      color: props.color,
      borderRadius: props.pill ? 'pill' : 'default',
      paddingX: 2,
      paddingY: 1,
      fontSize: 0,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: 'tight',
    }),
  ({ ax }) => css(ax),
);

function Badge({
  pill,
  backgroundColor = 'tag',
  color = 'tagText',
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
