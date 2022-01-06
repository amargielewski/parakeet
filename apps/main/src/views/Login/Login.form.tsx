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

export const StyledButton = styled(Button)`
  margin-top: 20px;
  margin-bottom: 10px;
  max-width: 350px;
  width: 100%;
`;

export const StyledResetPasswordContainer = styled.div`
  margin: 10px 0;
  width: 100%;
  max-width: 350px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const StyledCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledCheckboxText = styled(Label)`
  margin-left: 10px;
`;

export const StyledResetText = styled(Label)`
  text-decoration: none;
`;

export const StyledLoginLink = styled(Link)`
  text-decoration: none;
`;

export const StyledResetLink = styled(Link)`
  text-decoration: none;
`;

export const LoginForm = () => {
  return (
    <StyledForm>
      <StyledInputWrapper>
        <StyledInputTitle>email address</StyledInputTitle>
        <StyledInput
          type="email"
          appearance="secondary"
          placeholder="example@gmail.com"
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

      <StyledResetPasswordContainer>
        <StyledCheckboxContainer>
          <Checkbox size={20} />
          <StyledCheckboxText>Remember me</StyledCheckboxText>
        </StyledCheckboxContainer>
        <StyledResetLink to="/recovery">
          <StyledResetText>Reset Password?</StyledResetText>
        </StyledResetLink>
      </StyledResetPasswordContainer>
      <StyledButton appearance="primary">Create account</StyledButton>
      <StyledLoginLink to="/signup">
        <Label>Don't have account yet? New Account</Label>
      </StyledLoginLink>
    </StyledForm>
  );
};
