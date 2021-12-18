import { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './Button.styled';

export type Appearance = 'primary' | 'secondary';

export type Size = 'small' | 'medium';

export type ButtonProps = {
  appearance: Appearance;
  size: Size;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  appearance = 'primary',
  size = 'small',
  children,
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton
      isChildren={!!children}
      appearance={appearance}
      size={size}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};
