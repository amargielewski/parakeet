import styled, { css } from 'styled-components';
import { InputHTMLAttributes } from 'react';
import CheckedIcon from '../../Assets/CheckedIcon.svg';

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement>;

const StyledInput = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  margin: 0;
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.text_primary};
  border: 1px solid ${({ theme }) => theme.colors.checkbox_border};
  border-radius: ${({ theme }) => theme.borderRadius.checkbox_default}px;

  display: grid;
  place-content: center;

  ::before {
    content: '';
    width: 20px;
    height: 20px;
    transform: scale(0);
    transition: 0.12s transform ease-in-out;
    background-color: ${({ theme }) => theme.colors.checkbox_checked};
    background-repeat: no-repeat;
    background-position: 50% 50%;
    border-radius: ${({ theme }) => theme.borderRadius.checkbox_default}px;
    background-image: url(${CheckedIcon});
    transform-origin: top left;
  }
  :checked::before {
    transform: scale(1);
  }

  :disabled {
    background-color: ${({ theme }) => theme.colors.checkbox_border};
    cursor: not-allowed;
  }
`;

export const Checkbox = (props: CheckboxProps) => {
  return <StyledInput type="checkbox" />;
};
