import React from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { Box, Flex, BoxProps } from '../';

interface HeroProps extends BoxProps {
  image?: string;
  imagePosition?: string;
  children: React.ReactNode;
}

const HeroWrapper = styled(Flex)<HeroProps>(
  css({
    height: 480,
    backgroundColor: 'primary',
    background:
      'rgba(75, 93, 255, 0.75) linear-gradient(110.25deg, #4B5DFF 25.66%, rgba(75, 93, 255, 0.75) 45.5%)',
    color: 'primaryText',
    position: 'relative',
    flexShrink: 0,
  }),
  ({ ax }) => css(ax),
);

const ContentWrapper = styled(Flex)(
  css({
    flexDirection: 'column',
    padding: 6,
    position: 'absolute',
    width: '100%',
    height: '100%',
  }),
);

function Hero({
  image,
  imagePosition,
  children,
  ...props
}: HeroProps): JSX.Element {
  return (
    <HeroWrapper {...props}>
      {image && (
        <Box
          css={{
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
      <ContentWrapper>{children}</ContentWrapper>
    </HeroWrapper>
  );
}

export { Hero, HeroProps };
