import styled from 'styled-components';
import { Input, Label, HeadingSmall } from '@parakeet/ui';
import { Checkbox, Textarea, Button } from '@parakeet/ui';
import { PhotoInput } from '../PhotoInput/PhotoInput';
import { useState, ChangeEvent } from 'react';
import { SelectBox } from '../Select/SelectBox';
export const StyledInputWrapper = styled.label`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
`;

export const StyledPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledInputTitle = styled(Label)`
  margin-bottom: 10px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.text_primary};
`;
export const StyledInput = styled(Input)``;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledCheckboxContainer = styled.div`
  margin-top: 35px;
  margin-left: 30px;
  width: 100%;
  display: flex;
  align-self: center;
`;

export const StyledCheckboxText = styled(HeadingSmall)`
  margin-left: 20px;
`;

export const StyledButton = styled(Button)`
  margin-top: 50px;
`;

const options = [
  { value: 'microsoft', label: 'Microsoft' },
  { value: 'aplle', label: 'Aplle' },
  { value: 'sony', label: 'Sony' },
];

export const ProductModalForm = () => {
  const [photo, setPhoto] = useState<File | null>();
  console.log(photo);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoto(null);

    const selected = e.target.files?.[0] ?? null;

    if (!selected?.type.includes('image')) {
      console.log('Must be image');
      return;
    }

    setPhoto(selected);
  };

  return (
    <StyledForm>
      <PhotoInput appereance="primary" onChange={handleFileChange} />

      <StyledInputWrapper>
        <StyledInputTitle>Product Name</StyledInputTitle>
        <StyledInput type="text" appearance="tertiary" placeholder="Macbook" />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <StyledInputTitle>Brand</StyledInputTitle>
        <SelectBox options={options} />
      </StyledInputWrapper>
      <StyledPriceWrapper>
        <StyledInputWrapper>
          <StyledInputTitle>Price</StyledInputTitle>
          <StyledInput type="number" appearance="tertiary" placeholder="1200" />
        </StyledInputWrapper>
        <StyledCheckboxContainer>
          <Checkbox size={20} />
          <StyledCheckboxText>Negotiable</StyledCheckboxText>
        </StyledCheckboxContainer>
      </StyledPriceWrapper>
      <StyledInputWrapper>
        <StyledInputTitle>Descriptions</StyledInputTitle>
        <Textarea placeholder="Product Description" />
      </StyledInputWrapper>

      <StyledButton icon={{ position: 'left', size: 20, name: 'UploadIcon' }}>
        Save Product
      </StyledButton>
    </StyledForm>
  );
};
