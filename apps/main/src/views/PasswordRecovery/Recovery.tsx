import styled from 'styled-components';
import { Button, Icon } from '@parakeet/ui';
import { HeadingLarge } from '@parakeet/ui';
import { Input } from '@parakeet/ui';
import { Label } from '@parakeet/ui';

export const StyledWrapper = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.auth_primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledContainerWrapper = styled.form`
  max-width: 700px;
  width: 100%;
  height: max-content;
  background-color: ${({ theme }) => theme.colors.recovery_primary};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 120px 70px;
`;

export const StyledLogoContainer = styled.div``;

export const StyledHeading = styled(HeadingLarge)`
  margin-top: 60px;
  text-transform: capitalize;
`;

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledFormInput = styled(Input)``;
export const StyledInputTitle = styled(Label)`
  margin-bottom: 10px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.text_primary};
`;
export const StyledInputWrapper = styled.span`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
`;

export const StyledFormButton = styled(Button)`
  max-width: 500px;
  width: 100%;
  margin-top: 25px;
`;

export const Recovery = () => {
  return (
    <StyledWrapper>
      <StyledContainerWrapper>
        <StyledLogoContainer>
          <Icon name="LogoIcon" size={92} />
          <StyledHeading>recover</StyledHeading>
        </StyledLogoContainer>
        <StyledForm>
          <StyledInputWrapper>
            <StyledInputTitle>email address</StyledInputTitle>
            <StyledFormInput
              type="email"
              appearance="secondary"
              placeholder="jan.kowalski@gmail.com"
            />
          </StyledInputWrapper>
          <StyledFormButton>Reset your password</StyledFormButton>
        </StyledForm>
      </StyledContainerWrapper>
    </StyledWrapper>
  );
};
