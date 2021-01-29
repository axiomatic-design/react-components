import React from 'react';
import feather from 'feather-icons';
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
    <Box
      as="i"
      {...props}
      base={{ width: size, height: size, color: color }}
      dangerouslySetInnerHTML={{
        // eslint-disable-next-line
        __html: feather.icons[name].toSvg({ width: size, height: size }),
      }}
    />
  );
}

export { Icon, IconProps };
