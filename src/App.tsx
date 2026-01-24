import RootRoute from '@/routes/RootRoute';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/api/queryClient';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ToastContainer
          position="top-left"
          transition={Slide}
          autoClose={2000}
          hideProgressBar
          closeOnClick
          pauseOnHover
          draggable
          theme="light"
        />
        <RootRoute />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
