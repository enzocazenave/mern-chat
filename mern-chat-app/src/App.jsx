import { AppRouter } from './router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

export const App = () => {
  
  return (
      <BrowserRouter>
          <Provider store={ store }>
              <AppRouter />
          </Provider>
      </BrowserRouter>
  )
}
