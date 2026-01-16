import RootRoute from '@/routes/RootRoute';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/api/queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <RootRoute />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
