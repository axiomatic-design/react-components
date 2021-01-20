import React from 'react';
import {
  Button as RebassButton,
  ButtonProps as RebassButtonProps,
} from 'rebass';

interface ButtonProps extends RebassButtonProps {
  children: React.ReactNode;
}

function Button({ children, ...props }: ButtonProps): JSX.Element {
  return (
    <RebassButton sx={{ cursor: 'pointer' }} {...props}>
      {children}
    </RebassButton>
  );
}

export { Button, ButtonProps };
