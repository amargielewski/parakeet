import styled, { css } from 'styled-components';
import { ButtonAppearance, ButtonIconPosition, ButtonSize } from './Button';

export const primaryButtonAppearanceCss = css`
  background: ${({ theme }) => theme.colors.button_primary};

  &:hover {
    background: ${({ theme }) => theme.colors.button_primary_hover};
  }
`;

export const secondaryButtonAppearanceCss = css`
  background: ${({ theme }) => theme.colors.button_secondary};
  border: 1px solid ${({ theme }) => theme.colors.button_secondary_border};

  &:hover {
    background: ${({ theme }) => theme.colors.button_secondary_hover};
  }
`;

export const tertiaryButtonAppearanceCss = css`
  background: ${({ theme }) => theme.colors.button_tertiary};

  &:hover {
    background: ${({ theme }) => theme.colors.button_tertiary_hover};
  }
`;

export const iconButtonCss = css`
  padding: 0;
  width: 34px;
  height: 34px;
`;

export const smallButtonSizeCss = css`
  height: 40px;
`;

export const defaultButtonSizeCss = css`
  height: 50px;
  font-size: ${({ theme }) => theme.fontSizes.m}px;
`;

const getAppearance = {
  primary: primaryButtonAppearanceCss,
  secondary: secondaryButtonAppearanceCss,
  tertiary: tertiaryButtonAppearanceCss,
};

const getSize = {
  small: smallButtonSizeCss,
  default: defaultButtonSizeCss,
};

export const StyledButton = styled.button<{
  appearance: ButtonAppearance;
  isChildren: boolean;
  iconPosition?: ButtonIconPosition;
  size: ButtonSize;
}>`
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.medium}px;
  border: none;
  color: ${({ theme }) => theme.colors.text_primary};
  cursor: pointer;
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  gap: 10px;
  height: 46px;
  justify-content: center;
  outline: none;
  padding: 0 20px;
  transition: all ${({ theme }) => theme.transitions.default}s ease;
  width: 100%;
  flex-direction: ${({ iconPosition }) =>
    iconPosition === 'right' ? 'row-reverse' : 'row'};

  ${({ size }) => getSize[size]};
  ${({ appearance }) => getAppearance[appearance]};
  ${({ isChildren }) => !isChildren && iconButtonCss};
`;
