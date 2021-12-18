import { icons } from '../../Icons/index';
import styled from 'styled-components';

type IconTypes = {
  size: number;
};

const IconWrapper = styled.div<IconTypes>`
  display: flex;
  font-size: ${({ size }) => size}px;
`;

export type IconProps = {
  name: keyof typeof icons;
  size: number;
};

export const Icon = ({ name, size }: IconProps) => {
  return <IconWrapper size={size}>{icons[name]()}</IconWrapper>;
};
