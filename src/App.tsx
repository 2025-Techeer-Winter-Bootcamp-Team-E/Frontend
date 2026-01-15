import RootRoute from '@/routes/RootRoute';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <RootRoute />
    </BrowserRouter>
  );
}

export default App;
