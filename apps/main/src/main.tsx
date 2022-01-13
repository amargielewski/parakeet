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
import { ModalLayout } from './components/_layout/ModalLayout.tsx/ModalLayout';
import { ProductModal } from './components/ProductModal/ProductModal';
import CustomerModal from './components/CustomerModal/CustomerModal';
import { EventModal } from './components/EventModal/EventModal';
import { ModalContextProvider } from './context/ModalContext';

const StyledAppWrapper = styled.div`
  background-color: #fff;
`;

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={themeVariant.Default}>
        <ModalContextProvider>
          <StyledAppWrapper>
            <Routes>
              <Route path="/" element={<AuthLayout />} />
              <Route path={'/login'} element={<Login />} />
              <Route path={'/signup'} element={<Signup />} />
              <Route path={'/recovery'} element={<Recovery />} />
              <Route path={'/modal'} element={<EventModal />} />
            </Routes>
          </StyledAppWrapper>
        </ModalContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
