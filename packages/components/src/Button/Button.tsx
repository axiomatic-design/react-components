import React from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { BoxProps, Flex } from '../';
import { Icon } from '../Icon';
import type { FeatherIconName } from '../Icon/icon-names';

type ButtonVariant = 'primary' | 'outline' | 'secondary';

interface ButtonProps extends BoxProps {
  label?: string;
  disabled?: boolean;
  variant?: ButtonVariant;
  icon?: FeatherIconName;
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

const ButtonContainer = styled(Flex)<ButtonProps>(
  css({
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
  }),
  ({ variant }) => variant && css({ ...buttonStyles[variant] }),
  ({ ax }) => css(ax),
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
