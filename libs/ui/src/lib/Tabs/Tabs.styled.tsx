import { HeadingSmall } from '../Typography/Typography.style';
import styled, { css } from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTabText = styled(HeadingSmall)`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

const ActiveTab = css`
  background-color: ${({ theme }) => theme.colors.event_modal_tabs};
`;

const StyledTabButton = styled.button<{
  active: boolean;
}>`
  border: none;
  padding: 10px 20px;
  border-radius: ${({ theme }) =>
    theme.borderRadius.modal_event_tabs_default}px;
  cursor: pointer;
  background: none;

  ${({ active }) => active && ActiveTab}
`;

const StyledTabWrapper = styled.div`
  width: max-content;
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.event_modal_tabs}0D;
  border-radius: ${({ theme }) =>
    theme.borderRadius.modal_event_tabs_default}px;
`;

const StyledTabContentWrapper = styled.div``;

export {
  StyledTabContentWrapper,
  StyledTabButton,
  StyledTabText,
  StyledWrapper,
  StyledTabWrapper,
};
