import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { store } from './state-management/store';
import { Provider } from 'react-redux';

import App from './App';

createRoot(document.getElementById('root')!).render(
      <StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </StrictMode>
)
