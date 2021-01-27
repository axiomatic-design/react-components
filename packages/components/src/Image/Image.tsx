import React from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { Box } from '../';

interface ImageProps {
  src: string;
  alt: string;
}

const ImageWrapper = styled(Box)((sx) =>
  css({
    maxWidth: '100%',
    height: 'auto',
    ...sx,
  }),
);

function Image({ src, alt, ...props }: ImageProps): JSX.Element {
  return <ImageWrapper as="img" src={src} alt={alt} {...props} />;
}

export { Image, ImageProps };
