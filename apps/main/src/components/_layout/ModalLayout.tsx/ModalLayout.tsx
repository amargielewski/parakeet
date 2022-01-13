import { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

export type ModalSize = 'small' | 'default' | 'large';
export type ModalPosition = 'right' | 'center';

export type ModalLayoutProps = PropsWithChildren<{
  size?: ModalSize;
  position: ModalPosition;
}>;

export const rightModalPositionCss = css`
  right: 0;
  top: 0;
`;

export const centerModalPositionCss = css`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: max-content;
  border-radius: ${({ theme }) => theme.borderRadius.modal_center_default}px;
`;

const getPosition = {
  right: rightModalPositionCss,
  center: centerModalPositionCss,
};

export const smallModalSizeCss = css`
  max-width: 370px;
`;
export const defaultModalSizecss = css`
  max-width: 400px;
`;
export const largeModalSizecss = css`
  max-width: 570px;
`;

const getSize = {
  small: smallModalSizeCss,
  default: defaultModalSizecss,
  large: largeModalSizecss,
};

export const StyledWrapper = styled.div<{
  size: ModalSize;
  position: ModalPosition;
}>`
  position: absolute;
  height: 100vh;

  background: ${({ theme }) => theme.colors.modal_primary};
  ${({ size }) => getSize[size]}
  width: 100%;

  ${({ position }) => getPosition[position]}
`;

// eslint-disable-next-line @typescript-eslint/ban-types

export const ModalLayout = ({
  children,
  size = 'small',
  position = 'right',
}: ModalLayoutProps) => {
  return (
    <StyledWrapper size={size} position={position}>
      {children}
    </StyledWrapper>
  );
};

//
