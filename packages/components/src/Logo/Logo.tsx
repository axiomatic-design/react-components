import React from 'react';
import { Box, Heading, Flex } from '../';

interface LogoProps {
  size?: string;
  iconOnly?: boolean;
}

function Logo({ size = '48px', iconOnly }: LogoProps): JSX.Element {
  return (
    <Flex
      ax={{
        alignItems: 'center',
        color: 'navLink',
        textDecoration: 'none',
        '&:hover': {
          color: 'primary',
        },
      }}
    >
      <Box ax={{ width: size, height: size }}>
        <svg
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="128"
            height="128"
          >
            <rect width="128" height="128" fill="#C4C4C4" />
          </mask>
          <g mask="url(#mask0)">
            <rect
              x="155.985"
              y="-41"
              width="32"
              height="264.436"
              transform="rotate(45 155.985 -41)"
              fill="#A636FE"
              fillOpacity="0.75"
            />
            <rect
              x="-21.8878"
              y="-8.26044"
              width="32"
              height="264.436"
              transform="rotate(-45 -21.8878 -8.26044)"
              fill="#4B5DFF"
              fillOpacity="0.75"
            />
            <rect width="32" height="128" fill="#4BC9FF" fillOpacity="0.75" />
            <path
              d="M32 83L50.5 64.5H32V83Z"
              fill="#4BC9FF"
              fillOpacity="0.75"
            />
          </g>
        </svg>
      </Box>
      {!iconOnly && (
        <Heading
          as="h1"
          ax={{
            fontFamily: 'heading',
            fontSize: 4,
            margin: 0,
            marginLeft: 3,
            letterSpacing: 'tight',
            color: 'unset',
          }}
        >
          Axiomatic
        </Heading>
      )}
    </Flex>
  );
}

export { Logo, LogoProps };
