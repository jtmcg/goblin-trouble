import React from 'react';
import { ThemeProvider } from 'styled-components';
import CalendarPage from './pages/calendar';
import { theme } from './theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const createQueryClient = () => {
  const queryClient = new QueryClient();
  return queryClient;
}

function App() {
  return (
    <QueryClientProvider client={createQueryClient()}>
      <ThemeProvider theme={theme}>
        <CalendarPage/>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
