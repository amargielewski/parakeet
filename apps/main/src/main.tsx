import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Sidebar, ThemeProvider, themeVariant } from '@parakeet/ui';

import styled from 'styled-components';
import { Login } from './views/Login/Login';
import { Signup } from './views/Signup/Signup';
import { Recovery } from './views/PasswordRecovery/Recovery';
import { EventModal } from './components/EventModal/EventModal';
import { ModalContextProvider } from './context/ModalContext';
import { Calendar } from './views/Calendar/Calendar';

const StyledAppWrapper = styled.div`
  margin-left: 220px;
`;

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={themeVariant.Default}>
        <ModalContextProvider>
          <Sidebar />
          <StyledAppWrapper>
            <Routes>
              <Route path="/calendar" element={<Calendar />} />
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
