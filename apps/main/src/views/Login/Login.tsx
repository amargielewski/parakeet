import { AuthBackground } from '../../components/AuthBackground/AuthBackground';
import { AuthSidebar } from '../../components/AuthSidebar/AuthSidebar';
import { AuthLayout } from '../../components/_layout/AuthLayout/AuthLayout';
import LoginImage from '../../assets/ilustrations/Login.svg';
import styled from 'styled-components';
import { LoginForm } from './Login.form';

const StyledImage = styled.img`
  max-width: 647px;
  width: 100%;
`;

export const Login = () => {
  return (
    <AuthLayout>
      <AuthSidebar title="log in">
        <LoginForm />
      </AuthSidebar>
      <AuthBackground>
        <StyledImage src={LoginImage} />
      </AuthBackground>
    </AuthLayout>
  );
};
