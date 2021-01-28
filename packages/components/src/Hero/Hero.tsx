import React from 'react';
import { Box, Flex, BoxProps } from '../';

interface HeroProps extends BoxProps {
  image?: string;
  imagePosition?: string;
  children: React.ReactNode;
}

function Hero({
  image,
  imagePosition,
  children,
  ...props
}: HeroProps): JSX.Element {
  return (
    <Flex
      {...props}
      base={{
        height: 480,
        backgroundColor: 'primary',
        background:
          'rgba(75, 93, 255, 0.75) linear-gradient(110.25deg, #4B5DFF 25.66%, rgba(75, 93, 255, 0.75) 45.5%)',
        color: 'primaryText',
        position: 'relative',
        flexShrink: 0,
      }}
    >
      {image && (
        <Box
          ax={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '100%',
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: imagePosition,
          }}
        />
      )}
      <Flex
        base={{
          flexDirection: 'column',
          padding: 6,
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      >
        {children}
      </Flex>
    </Flex>
  );
}

export { Hero, HeroProps };
