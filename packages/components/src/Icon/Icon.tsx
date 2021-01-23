import React from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';

import feather from './feather-sprite.svg';

import { Box } from '../';

interface IconProps {
  name: string;
  size?: string;
  color?: string;
}

const IconContainer = styled(Box)((props) =>
  css({
    width: props.size,
    height: props.size,
    color: props.color,
  }),
);

function Icon({ name, size = '18px', color = 'currentColor', ...props }) {
  return (
    <IconContainer size={size} color={color} {...props}>
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
