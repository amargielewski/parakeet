import styled, { css } from 'styled-components';
import { AppereanceProps, BadgeColor, BadgeSize } from './Badge';

export const badgePalleteConfig = {};

export const primaryBadgeAppearanceCss = css`
  border-radius: ${({ theme }) => theme.borderRadius.badge_default}px;

  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.s}px;
`;

export const secondaryBadgeAppearanceCss = css`
  border-radius: ${({ theme }) => theme.borderRadius.badge_tertiary}px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.xxs}px;
`;

export const tertiaryBadgeAppearanceCss = css`
  border-radius: ${({ theme }) => theme.borderRadius.badge_secondary}px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSizes.s}px;
`;

export const quaternaryBadgeAppearanceCss = css`
  border: 1px solid #605bff1a;
  border-radius: ${({ theme }) => theme.borderRadius.badge_tertiary}px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  background-color: transparent;
`;

export const smallBadgeSizeCss = css`
  padding: 3px 5px;
`;
export const mediumBadgeSizeCss = css`
  padding: 7px 10px;
`;
export const largeBadgeSizeCss = css`
  padding: 14px 10px; ;;
`;

const getAppearance = {
  primary: primaryBadgeAppearanceCss,
  secondary: secondaryBadgeAppearanceCss,
  tertiary: tertiaryBadgeAppearanceCss,
  quaternary: quaternaryBadgeAppearanceCss,
};

const getSize = {
  small: smallBadgeSizeCss,
  medium: mediumBadgeSizeCss,
  large: largeBadgeSizeCss,
};

export const StyledBadge = styled.div<{
  appereance: AppereanceProps;
  size: BadgeSize;
  bgColor?: BadgeColor;
}>`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ theme }) => theme.colors.text_primary};
  ${({ appereance }) => getAppearance[appereance]};
  ${({ size }) => getSize[size]}
  display: flex;
  align-items: center;
  justify-content: center;
`;
