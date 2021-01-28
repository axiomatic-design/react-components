import React from 'react';
import { Flex, BoxProps } from '../Box';

interface BadgeProps extends BoxProps {
  pill?: boolean;
  backgroundColor?: string;
  color?: string;
  children: React.ReactNode;
}

function Badge({
  pill,
  backgroundColor,
  color,
  ...props
}: BadgeProps): JSX.Element {
  return (
    <Flex
      {...props}
      base={{
        backgroundColor: backgroundColor || 'tag',
        color: color || 'tagText',
        borderRadius: pill ? 'pill' : 'default',
        paddingX: 2,
        paddingY: 1,
        fontSize: 0,
        lineHeight: 1,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 'tight',
        alignItems: 'center',
      }}
    />
  );
}

export { Badge, BadgeProps };
