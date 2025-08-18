import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from '@emotion/react';
import theme from './utils/theme.ts';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GuestList } from './pages';
import { CssBaseline, GlobalStyles } from '@mui/material';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={`
          @font-face {
            font-family: 'Bacalisties';
            src: url('/fonts/Bacalisties.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
          }
        `}
      />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/convidados' element={<GuestList />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
