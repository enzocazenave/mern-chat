import { AppRouter } from './router';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
  
  return (
      <BrowserRouter>
          <AppRouter />
      </BrowserRouter>
  )
}
