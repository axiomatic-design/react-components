import React from 'react';
import { Image as RebassImage, BoxProps } from 'rebass';

interface ImageProps extends BoxProps {
  src: string;
  alt: string;
}

function Image({ src, alt, ...props }: ImageProps): JSX.Element {
  return <RebassImage src={src} alt={alt} {...props} />;
}

export { Image, ImageProps };
