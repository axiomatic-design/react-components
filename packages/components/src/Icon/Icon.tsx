import React from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';

import feather from './feather-sprite.svg';
import type { FeatherIconName } from './icon-names';

import { Box, BoxProps } from '../';

interface IconProps extends BoxProps {
  name: FeatherIconName;
  size?: string;
  color?: string;
}

const IconContainer = styled(Box)<Omit<IconProps, 'name'>>(
  (props) =>
    css({
      width: props.size,
      height: props.size,
      color: props.color,
    }),
  ({ ax }) => css(ax),
);

function Icon({
  name,
  size = '18px',
  color = 'currentColor',
  ...props
}: IconProps): JSX.Element {
  return (
    <IconContainer as="i" size={size} color={color} {...props}>
      <svg
        width={size}
        height={size}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <use xlinkHref={`${feather}#${name}`} />
      </svg>
    </IconContainer>
  );
}

export { Icon, IconProps };
