import styled, { css } from 'styled-components';

//headers

const headingDefaultCss = css`
  color: ${({ theme }) => theme.colors.text_primary};
  line-height: 1.5;
`;

export const HeadingLarge = styled.h2`
  ${headingDefaultCss}
  font-size: ${({ theme }) => theme.fontSizes.xxl}px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

export const HeadingDefault = styled.h3`
  ${headingDefaultCss}
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.text_primary + 'b3'};
`;

export const HeadingMedium = styled.h4`
  ${headingDefaultCss}
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

export const HeadingSmall = styled.h6`
  ${headingDefaultCss}
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

export const Label = styled.h5`
  ${headingDefaultCss}
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.text_primary + 'b3'};
`;

export const HeadingTable = styled.h6`
  ${headingDefaultCss}
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.text_primary + 'b3'};
`;

//text

const textDefaultCss = css`
  color: #fafafa;
`;

//Font-sizes : 16px, 14px, 12px 10px;
//Opacity: 14px:0.9;  14px: 0.7; 14px: 10px:0.5 ,10px:0.9; 16px:0.7: 12px:0.7

export const TextLarge = styled.p`
  ${textDefaultCss}
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

export const TextDefault = styled.p`
  ${textDefaultCss}
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

export const TextMedium = styled.p`
  ${textDefaultCss}
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

export const TextSmall = styled.p`
  ${textDefaultCss}
  font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;
