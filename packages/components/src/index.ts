import styled from '@emotion/styled';
import {
  createShouldForwardProp,
  props,
} from '@styled-system/should-forward-prop';
import { Box as _Box, Flex as _Flex, BoxProps as _BoxProps } from 'reflexbox';
import type { SystemStyleObject } from '@styled-system/css';

export interface BoxProps extends _BoxProps {
  /** ax prop is passed to styled-system/css for theme aware customizations */
  ax?: SystemStyleObject;
  /** This is caused by a conflict between styled-system and React */
  color?: string;
}

const shouldForwardProp = createShouldForwardProp([...props, 'ax']);

export const Box = styled(_Box, { shouldForwardProp })``;
export const Flex = styled(Box)({
  display: 'flex',
});

export { ArticlePreview } from './ArticlePreview';
export type { ArticlePreviewProps } from './ArticlePreview';

export { Badge } from './Badge';
export type { BadgeProps } from './Badge';

export { Button } from './Button';
export type { ButtonProps } from './Button';

export { Card } from './Card';

export { Hero } from './Hero';
export type { HeroProps } from './Hero';

export { Icon } from './Icon';
export type { IconProps } from './Icon';

export { Image } from './Image';
export type { ImageProps } from './Image';

export { Link } from './Link';
export type { LinkProps } from './Link';

export { Logo } from './Logo';
export type { LogoProps } from './Logo';

export { Nav } from './Nav';
export type { NavProps } from './Nav';

export { PackagePreview } from './PackagePreview';
export type { PackagePreviewProps } from './PackagePreview';

export { theme, ThemeProvider, GlobalStyle } from './theme';

export { Text, Heading, Eyebrow, SubHeading } from './Typography';
