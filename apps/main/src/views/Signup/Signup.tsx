import { AuthBackground } from '../../components/AuthBackground/AuthBackground';
import { AuthSidebar } from '../../components/AuthSidebar/AuthSidebar';
import { AuthLayout } from '../../components/_layout/AuthLayout/AuthLayout';
import SignupImage from '../../assets/ilustrations/Login.svg';
import styled from 'styled-components';
import { SignupForm } from './Signup.form';
const StyledImage = styled.img`
  max-width: 647px;
  width: 100%;
`;

export const Signup = () => {
  return (
    <AuthLayout>
      <AuthSidebar title="sign up">
        <SignupForm />
      </AuthSidebar>
      <AuthBackground>
        <StyledImage src={SignupImage} />
      </AuthBackground>
    </AuthLayout>
  );
};
