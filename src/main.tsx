import './index.css';
import "./assets/fonts/ChakraPetchRegular.otf";
import "./assets/fonts/CorneritaBlack.ttf";
import "./assets/fonts/CorneritaBold.ttf";
import "./assets/fonts/CorneritaRegular.ttf";
import "./assets/fonts/CorneritaThin.ttf";
import "./assets/fonts/CorneritaVF.ttf";
import "./assets/fonts/SanghaKaliRegular.otf";
import "./assets/fonts/ShareTechMono.otf";
import "./assets/fonts/SimpleSquareRegular.otf";

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
