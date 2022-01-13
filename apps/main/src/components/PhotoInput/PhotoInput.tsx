import styled, { css } from 'styled-components';
import { Icon } from '@parakeet/ui';
import { SetStateAction, useState } from 'react';
import { InputHTMLAttributes } from 'react';

export const primaryPhotoInputAppearanceCss = css`
  background-color: ${({ theme }) => theme.colors.modal_photo_input_primary};
  width: 110px;
  height: 110px;
`;

export const secondaryPhotoInputAppearanceCss = css`
  background-color: ${({ theme }) => theme.colors.modal_photo_input_secondary};
  width: 135px;
  height: 135px;
`;

const getAppearance = {
  primary: primaryPhotoInputAppearanceCss,
  secondary: secondaryPhotoInputAppearanceCss,
};

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  opacity: 0;
  cursor: pointer;
`;

export const StyledIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledWrapper = styled.div<{
  appereance: PhotoInputAppereance;
}>`
  margin-top: 40px;
  margin-bottom: 20px;
  width: 110px;
  height: 110px;
  border-radius: ${({ theme }) => theme.borderRadius.circle}%;
  position: relative;
  ${({ appereance }) => getAppearance[appereance]}
`;

export type PhotoInputAppereance = 'primary' | 'secondary';

export type PhotoInputProps = {
  appereance: PhotoInputAppereance;
} & InputHTMLAttributes<HTMLInputElement>;

export const PhotoInput = ({
  onChange,
  value,
  appereance,
}: PhotoInputProps) => {
  return (
    <StyledWrapper appereance={appereance}>
      <StyledInput onChange={onChange} value={value} type="file" />
      <StyledIcon name="CameraIcon" size={22} />
    </StyledWrapper>
  );
};
