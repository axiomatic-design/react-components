import React from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { Box, BoxProps } from '../';

interface TextProps extends BoxProps {
  children: React.ReactNode;
}

const TextWrapper = styled(Box)<TextProps>(
  css({
    color: 'copy',
    lineHeight: 'body',
    fontSize: 2,
    marginBottom: 4,
  }),
  ({ ax }) => css(ax),
);

function Text({ ...props }: TextProps): JSX.Element {
  return <TextWrapper as="p" {...props} />;
}

const HeadingWrapper = styled(Box)<TextProps>(
  css({
    fontFamily: 'heading',
    letterSpacing: 'tight',
    color: 'headings',
    fontSize: 4,
    lineHeight: 'headings',
    marginBottom: 3,
  }),
  ({ ax }) => css(ax),
);

function Heading({ ...props }: TextProps): JSX.Element {
  return <HeadingWrapper as="h2" {...props} />;
}

const SubHeadingWrapper = styled(Box)<TextProps>(
  css({
    fontFamily: 'body',
    fontWeight: 'bold',
    fontSize: 3,
    marginBottom: 3,
    color: 'headings',
  }),
  ({ ax }) => css(ax),
);

function SubHeading({ ...props }: TextProps): JSX.Element {
  return <SubHeadingWrapper as="h3" {...props} />;
}

const EyebrowWrapper = styled('h4')<TextProps>(
  css({
    letterSpacing: 'tight',
    color: 'eyebrow',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 2,
  }),
  ({ ax }) => css(ax),
);

function Eyebrow({ ...props }: TextProps): JSX.Element {
  return <EyebrowWrapper as="h4" {...props} />;
}

export { Text, Heading, Eyebrow, SubHeading };
