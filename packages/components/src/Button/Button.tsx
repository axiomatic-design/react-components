import React from 'react';
import { BoxProps, Flex } from '../';
import { Icon } from '../Icon';
import type { FeatherIconName } from '../Icon/icon-names';

type ButtonVariant = 'primary' | 'outline' | 'secondary';

interface ButtonProps extends BoxProps {
  label?: string;
  disabled?: boolean;
  variant?: ButtonVariant;
  iconLeft?: FeatherIconName;
  iconRight?: FeatherIconName;
  onClick: () => void;
}

const disabledButton = {
  backgroundColor: 'disabled',
  color: 'disabledText',
  cursor: 'not-allowed',
};

const buttonStyles = {
  primary: {
    backgroundColor: 'primary',
    color: 'primaryText',
    '&:hover': {
      backgroundColor: 'primaryHover',
    },
    '&:disabled': {
      ...disabledButton,
    },
  },
  outline: {
    backgroundColor: 'transparent',
    color: 'primary',
    border: 'default',
    borderColor: 'primary',
    '&:hover': {
      backgroundColor: 'outlineButtonHover',
    },
    '&:disabled': {
      borderColor: 'disabled',
      cursor: 'not-allowed',
      color: 'disabledText',
      background: 'transparent',
    },
  },
  secondary: {
    backgroundColor: 'secondary',
    color: 'secondaryText',
    '&:hover': {
      backgroundColor: 'secondaryHover',
    },
    '&:disabled': {
      ...disabledButton,
    },
  },
};

function Button({
  label,
  variant = 'primary',
  iconLeft,
  iconRight,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <Flex
      as="button"
      {...props}
      base={{
        appearance: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 2,
        border: 0,
        borderRadius: 'default',
        paddingX: 3,
        paddingY: 2,
        cursor: 'pointer',
        transition: 'background 0.2s ease-in-out',
        fontWeight: 'bold',
        ...buttonStyles[variant],
      }}
    >
      {iconLeft && <Icon name={iconLeft} ax={{ marginRight: 2 }} />}
      {label}
      {iconRight && <Icon name={iconRight} ax={{ marginLeft: 2 }} />}
    </Flex>
  );
}

export { Button, ButtonProps };
