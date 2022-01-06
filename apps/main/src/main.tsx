import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, themeVariant } from '@parakeet/ui';

import styled from 'styled-components';
import App from './app/app';
import { Login } from './views/Login/Login';
import { Signup } from './views/Signup/Signup';
import { AuthLayout } from './components/_layout/AuthLayout/AuthLayout';
import { Recovery } from './views/PasswordRecovery/Recovery';

const StyledAppWrapper = styled.div``;

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={themeVariant.Default}>
        <StyledAppWrapper>
          <Routes>
            <Route path="/" element={<AuthLayout />} />
            <Route path={'/login'} element={<Login />} />
            <Route path={'/signup'} element={<Signup />} />
            <Route path={'/recovery'} element={<Recovery />} />
          </Routes>
        </StyledAppWrapper>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
