import { PhotoInput } from '../PhotoInput/PhotoInput';
import styled from 'styled-components';
import { Input, Label, Button } from '@parakeet/ui';
import { SelectBox } from '../Select/SelectBox';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledInputWrapper = styled.label`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  max-width: 350px;
  width: 100%;
`;

export const StyledInputTitle = styled(Label)`
  margin-bottom: 10px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.text_primary};
`;

export const StyledButton = styled(Button)`
  margin-top: 30px;
`;

const options = [
  { value: 'men', label: 'Men' },
  { value: 'women', label: 'Women' },
  { value: 'other', label: 'Other' },
];

export const StyledInput = styled(Input)``;

export default function CustomerModalForm() {
  return (
    <StyledForm>
      <PhotoInput appereance="secondary" />

      <StyledInputWrapper>
        <StyledInputTitle>First Name</StyledInputTitle>
        <StyledInput type="text" appearance="tertiary" />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <StyledInputTitle>Last Name</StyledInputTitle>
        <StyledInput type="text" appearance="tertiary" />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <StyledInputTitle>Email</StyledInputTitle>
        <StyledInput type="email" appearance="tertiary" />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <StyledInputTitle>Phone Number</StyledInputTitle>
        <StyledInput type="number" appearance="tertiary" />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <StyledInputTitle>Brand</StyledInputTitle>
        <SelectBox options={options} />
      </StyledInputWrapper>

      <StyledButton icon={{ position: 'left', size: 20, name: 'UploadIcon' }}>
        Save Product
      </StyledButton>
    </StyledForm>
  );
}
