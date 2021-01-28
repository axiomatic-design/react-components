import styled from '@emotion/styled';
import {
  compose,
  space,
  layout,
  typography,
  color,
  flexbox,
  SpaceProps,
  LayoutProps,
  TypographyProps,
  ColorProps,
  FlexboxProps,
} from 'styled-system';
import {
  createShouldForwardProp,
  props,
} from '@styled-system/should-forward-prop';
import css, { SystemStyleObject } from '@styled-system/css';

interface BoxProps
  extends SpaceProps,
    LayoutProps,
    TypographyProps,
    ColorProps,
    FlexboxProps {
  /** The initial styles for a component */
  base?: SystemStyleObject;
  /** ax prop is passed to styled-system/css for theme aware customizations */
  ax?: SystemStyleObject;
  /** Allow for changing of tag types */
  as?: React.ElementType;
  /** This is caused by a conflict between styled-system and React */
  color?: string;
}

const shouldForwardProp = createShouldForwardProp([...props, 'base', 'ax']);
const base = (props: BoxProps) => css(props.base);
const ax = (props: BoxProps) => css(props.ax);

const Box = styled('div', {
  shouldForwardProp,
})<BoxProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  ax,
  compose(space, layout, typography, color, flexbox),
);

const Flex = styled(Box)<BoxProps>({
  display: 'flex',
});

export { Box, Flex, BoxProps };
