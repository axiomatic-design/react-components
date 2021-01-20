import styled from 'styled-components';
import {
  space,
  layout,
  color,
  flexbox,
  SpaceProps,
  LayoutProps,
  ColorProps,
  FlexboxProps,
} from 'styled-system';

interface BoxProps extends SpaceProps, LayoutProps, ColorProps, FlexboxProps {}

const Box = styled('div')<BoxProps>(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  space,
  layout,
  color,
  flexbox,
);

export { Box, BoxProps };
