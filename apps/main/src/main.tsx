import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Sidebar } from '@parakeet/ui';
import { ThemeProvider, themeVariant } from '@parakeet/ui';
import { Home } from './app/home';

import styled from 'styled-components';
import App from './app/app';

const StyledAppWrapper = styled.div`
  height: 10000px;
`;

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={themeVariant.Default}>
        <StyledAppWrapper>
          <Sidebar />
          <App />
          <Routes>
            <Route path={'/home'} element={<Home />} />
          </Routes>
        </StyledAppWrapper>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
