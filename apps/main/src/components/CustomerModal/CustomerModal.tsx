import { ModalLayout } from '../_layout/ModalLayout.tsx/ModalLayout';
import styled from 'styled-components';
import { HeadingMedium, Icon } from '@parakeet/ui';
import CustomerModalForm from './CustomerModalForm';
import { useModalContext } from '../../hooks/useModalContext';
import { ModalContext } from '../../context/ModalContext';
import { useContext } from 'react';
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
`;

const StyledFormWrapper = styled.div`
  width: 100%;
`;

export default function CustomerModal() {
  const { isOpen, closeModal, openModal } = useModalContext();

  return isOpen ? (
    <ModalLayout size="default" position="right">
      <StyledWrapper>
        <StyledHeadingContainer>
          <StyledHeading>Add Customer</StyledHeading>
          <StyledHeadingButton onClick={() => closeModal()}>
            <Icon name="CloseIcon" size={10} />
          </StyledHeadingButton>
        </StyledHeadingContainer>
        <StyledFormWrapper>
          <CustomerModalForm />
        </StyledFormWrapper>
      </StyledWrapper>
    </ModalLayout>
  ) : (
    <button onClick={() => openModal()}>Otwórz modal</button>
  );
}
