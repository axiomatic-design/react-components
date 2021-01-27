import React from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { Flex } from '../';
import { Icon } from '../Icon';

type ButtonVariant = 'primary' | 'outline' | 'secondary';

interface ButtonProps {
  label: string;
  disabled: boolean;
  variant?: ButtonVariant;
  icon?: string;
}

const buttonBase = {
  appearance: 'none',
  justifyContent: 'center',
  fontSize: 2,
  border: 0,
  borderRadius: 'default',
  paddingX: 3,
  paddingY: 2,
  cursor: 'pointer',
  transition: 'background 0.2s ease-in-out',
  fontWeight: 'bold',
};

const disabledButton = {
  backgroundColor: 'disabled',
  color: 'disabledText',
  cursor: 'not-allowed',
};

const buttonStyles = {
  primary: {
    ...buttonBase,
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
    ...buttonBase,
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
    ...buttonBase,
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

const ButtonContainer = styled(Flex)<{ variant: ButtonVariant }>(
  ({ variant }) => css(buttonStyles[variant]),
);

const ButtonIcon = styled(Icon)(
  css({
    marginRight: 1,
  }),
);

function Button({
  label,
  disabled,
  variant = 'primary',
  icon,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <ButtonContainer
      as="button"
      disabled={disabled}
      variant={variant}
      alignItems="center"
      {...props}
    >
      {icon && <ButtonIcon name={icon} />}
      {label}
    </ButtonContainer>
  );
}

export { Button, ButtonProps };
