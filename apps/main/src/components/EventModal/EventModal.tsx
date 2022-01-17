import { Icon, HeadingMedium } from '@parakeet/ui';
import { ModalLayout } from '../_layout/ModalLayout.tsx/ModalLayout';
import styled from 'styled-components';
import { useModalContext } from '../../hooks/useModalContext';
import { ModalTabs } from './ModalTabs';
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
`;

const StyledHeadingContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledHeading = styled(HeadingMedium)``;

const StyledHeadingButton = styled.button`
  border: none;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.customer_modal_button};
  border-radius: ${({ theme }) => theme.borderRadius.circle}px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

const StyledTabContainer = styled.div`
  width: 100%;
  align-self: flex-start;
  margin-bottom: 20px;
`;

export const EventModal = () => {
  const { isOpen, closeModal, openModal } = useModalContext();

  return (
    <ModalLayout position="center">
      <StyledWrapper>
        <StyledHeadingContainer>
          <StyledHeading>Create an Event</StyledHeading>
          <StyledHeadingButton onClick={() => closeModal()}>
            <Icon name="CloseIcon" size={10} />
          </StyledHeadingButton>
        </StyledHeadingContainer>
        <StyledTabContainer>
          <ModalTabs />
        </StyledTabContainer>
      </StyledWrapper>
    </ModalLayout>
  );
};
