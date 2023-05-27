import React from 'react';
import { ThemeProvider } from 'styled-components';
import CalendarPage from './pages/calendar';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CalendarPage/>
    </ThemeProvider>
  );
}

export default App;
