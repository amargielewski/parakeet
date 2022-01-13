import styled from 'styled-components';

export const StyledTextarea = styled.textarea`
  width: 100%;
  height: 100px;
  border: none;
  resize: none;
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.text_primary};
  background-color: ${({ theme }) => theme.colors.input_tertiary};
  padding: 20px 10px 20px 20px;
  border-radius: ${({ theme }) => theme.borderRadius.input_default}px;
  outline: none;
`;
