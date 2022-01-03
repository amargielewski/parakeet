import styled from 'styled-components';

import { StyledBadge } from './Badge.styled';

export type AppereanceProps =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'quaternary';

export type BadgeColor =
  | '#26C0E2'
  | '#3A974C'
  | '#FF8F6B'
  | '#EF37FF'
  | '#FF6A77'
  | '#D11A2A'
  | '#F29339'
  | '#3A974C1A'
  | '#D11A2A1A'
  | '#F293391A';
  

export type BadgeSize = 'small' | 'medium' | 'large';

export type BadgeProps = {
  appereance: AppereanceProps;
  size?: BadgeSize;
  bgColor: BadgeColor;
  badgeText: string;
};

export const Badge = ({
  appereance,
  size = 'large',
  bgColor,
  badgeText,
}: BadgeProps) => {
  return (
    <StyledBadge appereance={appereance} size={size} bgColor={bgColor}>
      {badgeText}
    </StyledBadge>
  );
};
