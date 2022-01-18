import { Icon, HeadingMedium, Button } from '@parakeet/ui';
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
  margin: 40px 0;
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
`;

const StyledTabContainer = styled.div`
  width: 100%;
  align-self: flex-start;
  margin-bottom: 20px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  align-self: flex-end;
  margin-bottom: 40px;
`;

const StyledCloseButton = styled(Button)`
  margin-right: 15px;
`;

const StyledSaveButton = styled(Button)``;

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
        <StyledButtonContainer>
          <StyledCloseButton appearance="secondary" size="small">
            Close
          </StyledCloseButton>
          <StyledSaveButton size="small">Save</StyledSaveButton>
        </StyledButtonContainer>
      </StyledWrapper>
    </ModalLayout>
  );
};
