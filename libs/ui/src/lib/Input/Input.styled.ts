import styled, { css } from 'styled-components';
import { AppereanceProps } from './Input';
import { Icon } from '../Icon/Icon';
import { HTMLInputTypeAttribute } from 'react';

export const RemoveInputArrows = css`
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const primaryInputAppearanceCss = css`
  background-color: ${({ theme }) => theme.colors.input_primary};
`;

export const secondaryInputAppearanceCss = css`
  background-color: ${({ theme }) => theme.colors.input_secondary};
`;

export const tertiaryInputAppearanceCss = css`
  background-color: ${({ theme }) => theme.colors.input_tertiary};
`;
const getAppearance = {
  primary: primaryInputAppearanceCss,
  secondary: secondaryInputAppearanceCss,
  tertiary: tertiaryInputAppearanceCss,
};

export const StyledIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
`;

export const StyledInput = styled.input<{
  appearance: AppereanceProps;
  type: HTMLInputTypeAttribute;
}>`
  width: 100%;
  border: none;
  padding: 20px 45px 20px 20px;
  color: ${({ theme }) => theme.colors.input_font};
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  border-radius: ${({ theme }) => theme.borderRadius.input_default}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  height: 50px;
  outline: none;
  ${({ appearance }) => getAppearance[appearance]}
  ${RemoveInputArrows}
`;
export const StyledInputWrapper = styled.div`
  width: 100%;
  position: relative;
`;
