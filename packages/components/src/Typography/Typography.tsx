import styled from '@emotion/styled';
import css from '@styled-system/css';

const Text = styled('p')(
  css({
    color: 'copy',
    lineHeight: 'body',
    marginBottom: 3,
  }),
);

const Heading = styled('h2')(
  css({
    fontFamily: 'heading',
    letterSpacing: 'tight',
    color: 'headings',
    fontSize: 4,
    lineHeight: 'headings',
    marginBottom: 3,
  }),
);

const Eyebrow = styled('h4')(
  css({
    letterSpacing: 'tight',
    color: 'eyebrow',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 2,
    marginBottom: 1,
  }),
);

export { Text, Heading, Eyebrow };
