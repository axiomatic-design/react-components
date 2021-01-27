import React from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { Box, BoxProps } from '../';

const TextWrapper = styled(Box)(({ sx }) =>
  css({
    color: 'copy',
    lineHeight: 'body',
    fontSize: 2,
    marginBottom: 4,
    ...sx,
  }),
);

function Text({ ...props }: BoxProps): JSX.Element {
  return <TextWrapper as="p" {...props} />;
}

const HeadingWrapper = styled(Box)(({ sx }) =>
  css({
    fontFamily: 'heading',
    letterSpacing: 'tight',
    color: 'headings',
    fontSize: 4,
    lineHeight: 'headings',
    marginBottom: 3,
    ...sx,
  }),
);

function Heading({ ...props }: BoxProps): JSX.Element {
  return <HeadingWrapper as="h2" {...props} />;
}

const SubHeadingWrapper = styled(Box)(({ sx }) =>
  css({
    fontFamily: 'body',
    fontWeight: 'bold',
    fontSize: 3,
    marginBottom: 3,
    color: 'headings',
    ...sx,
  }),
);

function SubHeading({ ...props }: BoxProps): JSX.Element {
  return <SubHeadingWrapper as="h3" {...props} />;
}

const EyebrowWrapper = styled('h4')(({ sx }) =>
  css({
    letterSpacing: 'tight',
    color: 'eyebrow',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 2,
    ...sx,
  }),
);

function Eyebrow({ ...props }: BoxProps): JSX.Element {
  return <EyebrowWrapper as="h4" {...props} />;
}

export { Text, Heading, Eyebrow, SubHeading };
