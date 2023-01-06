import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import App from './App';

// context providers
import CocktailProvider from './Contexts/CocktailProvider';
import FavoriteProvider from './Contexts/FavoriteProvider';
import SearchProvider from './Contexts/SearchProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CocktailProvider>
      <FavoriteProvider>
        <SearchProvider>
          <BrowserRouter>
            <App />
            <ToastContainer />
          </BrowserRouter>
        </SearchProvider>
      </FavoriteProvider>
    </CocktailProvider>
);

