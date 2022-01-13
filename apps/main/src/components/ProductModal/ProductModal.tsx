import { ModalLayout } from '../_layout/ModalLayout.tsx/ModalLayout';
import styled from 'styled-components';
import { Icon } from '@parakeet/ui';
import { HeadingMedium } from '@parakeet/ui';
import { ProductModalForm } from './ProductModalForm';
import { useModalContext } from '../../hooks/useModalContext';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
`;

const StyledHeadingContainer = styled.div`
  margin-top: 120px;
  width: 100%;
  display: flex;
`;

const StyledHeadingButton = styled.button`
  border-radius: ${({ theme }) => theme.borderRadius.circle}%;
  width: 28px;
  height: 28px;
  border: none;
  background: ${({ theme }) => theme.colors.product_modal_button};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const StyledHeading = styled(HeadingMedium)`
  margin-left: 40px;
`;

const StyledFormWrapper = styled.div`
  width: 100%;
`;

export const ProductModal = () => {
  const { openModal, closeModal, isOpen } = useModalContext();
  return isOpen ? (
    <ModalLayout size="small" position="right">
      <StyledWrapper>
        <StyledHeadingContainer>
          <StyledHeadingButton onClick={() => closeModal()}>
            <Icon name="LeftArrowIcon" size={12} />
          </StyledHeadingButton>
          <StyledHeading>Add a New Product</StyledHeading>
        </StyledHeadingContainer>
        <StyledFormWrapper>
          <ProductModalForm />
        </StyledFormWrapper>
      </StyledWrapper>
    </ModalLayout>
  ) : (
    <button onClick={() => openModal()}>Otwórz modal</button>
  );
};
