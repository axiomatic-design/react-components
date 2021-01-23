import React from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { Flex } from '../';
import { Icon } from '../Icon';

interface ButtonProps {
  label: string;
  disabled?: boolean;
  variant?: 'primary' | 'outline' | 'secondary';
  icon?: string;
}

const buttonBase = {
  fontSize: 2,
  border: 0,
  borderRadius: 'default',
  paddingX: 3,
  paddingY: 2,
  cursor: 'pointer',
  transition: 'background 0.2s ease-in-out',
};

const disabledButton = {
  backgroundColor: 'disabled',
  color: 'disabledText',
  cursor: 'not-allowed',
};

const buttonStyles = {
  primary: css({
    ...buttonBase,
    backgroundColor: 'primary',
    color: 'primaryText',
    '&:hover': {
      backgroundColor: 'primaryHover',
    },
    '&:disabled': {
      ...disabledButton,
    },
  }),
  outline: css({
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
  }),
};

const ButtonContainer = styled(Flex)(({ variant }) => buttonStyles[variant]);

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
