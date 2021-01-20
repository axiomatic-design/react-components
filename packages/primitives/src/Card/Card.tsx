import React from 'react';
import { Card as RebassCard, CardProps as RebassCardProps } from 'rebass';

interface CardProps extends RebassCardProps {
  children: React.ReactNode;
}

function Card({ children, ...props }: CardProps): JSX.Element {
  return <RebassCard {...props}>{children}</RebassCard>;
}

export { Card, CardProps };
