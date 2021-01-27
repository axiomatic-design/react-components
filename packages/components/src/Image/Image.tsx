import React from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { Box, BoxProps } from '../';

interface ImageProps extends BoxProps {
  src: string;
  alt: string;
}

const ImageWrapper = styled(Box)<ImageProps>(
  css({
    maxWidth: '100%',
    height: 'auto',
  }),
  ({ ax }) => css(ax),
);

function Image({ src, alt, ...props }: ImageProps): JSX.Element {
  return <ImageWrapper as="img" src={src} alt={alt} {...props} />;
}

export { Image, ImageProps };
