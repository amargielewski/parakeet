import { Icon, IconProps } from '../Icon/Icon';
import { InputHTMLAttributes, HTMLInputTypeAttribute } from 'react';
import { StyledInputWrapper, StyledInput, StyledIcon } from './Input.styled';
export type AppereanceProps = 'primary' | 'secondary' | 'tertiary';

export type InputProps = {
  type?: HTMLInputTypeAttribute;
  icon?: IconProps;
  placeholder?: string;
  appearance?: AppereanceProps;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  type = 'text',
  icon,
  placeholder,
  appearance = 'primary',
}: InputProps) => {
  return (
    <StyledInputWrapper>
      <StyledInput
        appearance={appearance}
        type={type}
        placeholder={placeholder}
      />
      {icon && <StyledIcon {...icon} />}
    </StyledInputWrapper>
  );
};

export default Input;
