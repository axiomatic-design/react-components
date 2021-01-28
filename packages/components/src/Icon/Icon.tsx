import React from 'react';
import feather from './feather-sprite.svg';
import type { FeatherIconName } from './icon-names';
import { Box, BoxProps } from '../';

interface IconProps extends BoxProps {
  name: FeatherIconName;
  size?: string;
  color?: string;
}

function Icon({
  name,
  size = '18px',
  color = 'currentColor',
  ...props
}: IconProps): JSX.Element {
  return (
    <Box as="i" {...props} base={{ width: size, height: size, color: color }}>
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
    </Box>
  );
}

export { Icon, IconProps };
