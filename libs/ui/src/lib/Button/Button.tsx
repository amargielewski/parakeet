import { ButtonHTMLAttributes } from 'react';
import { Icon, IconProps } from '../Icon/Icon';
import { StyledButton } from './Button.styled';

export type ButtonAppearance = 'primary' | 'secondary' | 'tertiary';
export type ButtonIconPosition = 'left' | 'right';
export type ButtonSize = 'default' | 'small';

export type ButtonProps = {
  appearance?: ButtonAppearance;
  icon?: IconProps & { position: ButtonIconPosition };
  size?: ButtonSize;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  appearance = 'primary',
  children,
  icon,
  size = 'default',
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton
      appearance={appearance}
      iconPosition={icon?.position}
      isChildren={!!children}
      size={size}
      {...rest}
    >
      {icon && <Icon {...icon} />}
      {children}
    </StyledButton>
  );
};
