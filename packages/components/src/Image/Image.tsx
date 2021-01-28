import React from 'react';
import { Box, BoxProps } from '../';

interface ImageProps extends BoxProps {
  src: string;
  alt: string;
}

function Image({ ...props }: ImageProps): JSX.Element {
  return (
    <Box as="img" {...props} base={{ maxWidth: '100%', height: 'auto' }} />
  );
}

export { Image, ImageProps };
