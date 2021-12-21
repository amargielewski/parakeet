import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Icon, IconProps } from '../Icon/Icon';
import { InputHTMLAttributes } from 'react';
export type CheckboxProps = {
  icon: 'CheckboxArrowIcon';
  changeChecked: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const StyledCheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;
const StyledInput = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledUnchecked = css`
  border: 1px solid ${({ theme }) => theme.colors.checkbox_border};
`;

const StyledCheckbox = styled.div<{
  checked: boolean;
}>`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: ${({ checked, theme }) =>
    checked ? theme.colors.checkbox_checked : 'transparent'};
  border-radius: ${({ theme }) => theme.borderRadius.checkbox_default}px;
  transition: all 150ms;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ checked }) => !checked && StyledUnchecked}
`;

export const Checkbox = ({ checked }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <StyledCheckboxContainer>
      <StyledInput type="checkbox" />
      <StyledCheckbox
        onClick={() => {
          if (isChecked) setIsChecked(false);
          if (!isChecked) setIsChecked(true);
        }}
        checked={isChecked}
      >
        {isChecked && <Icon name="CheckboxArrowIcon" size={15} />}
      </StyledCheckbox>
    </StyledCheckboxContainer>
  );
};
