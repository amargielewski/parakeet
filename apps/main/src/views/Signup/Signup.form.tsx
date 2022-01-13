import styled from 'styled-components';
import { Label } from '@parakeet/ui';
import { Input } from '@parakeet/ui';
import { Checkbox } from '@parakeet/ui';
import { Button } from '@parakeet/ui';
import { Link } from 'react-router-dom';

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
export const StyledInput = styled(Input)``;

export const StyledAgreeContainer = styled.div`
  display: flex;
  align-items: center;

  max-width: 350px;
  width: 100%;
`;

export const StyledAgreeText = styled(Label)`
  color: ${({ theme }) => theme.colors.text_primary};
  margin-left: 10px;
`;

export const StyledButton = styled(Button)`
  margin-top: 20px;
  margin-bottom: 5px;
  max-width: 350px;
  width: 100%;
`;

export const StyledSignupLink = styled(Link)`
  text-decoration: none;
`;

export const SignupForm = () => {
  return (
    <StyledForm>
      <StyledInputWrapper>
        <StyledInputTitle>full name</StyledInputTitle>
        <StyledInput
          type="text"
          appearance="secondary"
          placeholder="John Kevine"
        />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <StyledInputTitle>email address</StyledInputTitle>
        <StyledInput
          type="email"
          appearance="secondary"
          placeholder="example@gmail.com"
        />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <StyledInputTitle>username</StyledInputTitle>
        <StyledInput
          type="text"
          appearance="secondary"
          placeholder="johnkevine4362"
        />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <StyledInputTitle>password</StyledInputTitle>
        <StyledInput
          type="password"
          appearance="secondary"
          icon={{ name: 'PasswordIcon', size: 15 }}
        />
      </StyledInputWrapper>
      <StyledAgreeContainer>
        <Checkbox size={20} />
        <StyledAgreeText>
          By creating an account you agree to the terms of use and our privacy
          policy.
        </StyledAgreeText>
      </StyledAgreeContainer>

      <StyledButton appearance="primary">Create account</StyledButton>
      <StyledSignupLink to="/login">
        <Label>Already have an account? Log in</Label>
      </StyledSignupLink>
    </StyledForm>
  );
};
