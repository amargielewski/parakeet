import styled, { css } from 'styled-components';
import { Appearance, Size } from './Button';

export const primaryButtonAppearanceCss = css`
  background: ${({ theme }) => theme.colors.button_primary};
`;

export const secondaryButtonAppearanceCss = css`
  background: ${({ theme }) => theme.colors.button_secondary};
  border: 1px solid ${({ theme }) => theme.colors.button_secondary_border};
`;

export const withChildrenButtonCss = css`
  padding: 0 20px;
`;

export const withoutChildrenButtonCss = css`
  height: 34px;
  min-height: 34px;
  width: 34px;
`;

export const defaultButtonTypeCss = css`
  height: 100%;
`;

export const smallButtonSizeCss = css`
  min-height: 34px;
`;

export const mediumButtonSizeCss = css`
  min-height: 40px;
`;

export const largeButtonSizeCss = css`
  min-height: 50px;
`;

const getAppearance = {
  primary: primaryButtonAppearanceCss,
  secondary: secondaryButtonAppearanceCss,
};

const getButtonSize = {
  small: smallButtonSizeCss,
  medium: mediumButtonSizeCss,
  large: largeButtonSizeCss,
};

export const StyledButton = styled.button<{
  appearance: Appearance;
  size: Size;
  isChildren: boolean;
}>`
  outline: none;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium}px;
  align-items: center;
  display: flex;
  justify-content: center;
  ${({ appearance }) => getAppearance[appearance]};
  ${({ size }) => getButtonSize[size]};
  ${({ isChildren }) =>
    !isChildren ? withoutChildrenButtonCss : withChildrenButtonCss};
  /* remove when done */

  color: #fff;
  font-size: 14px;
`;
