import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HelmetProvider>
      <BrowserRouter>
        <ChakraProvider>
          <Routes>
            <Route path="*" element={ <App /> }>
            </Route>
          </Routes>
        </ChakraProvider>
      </BrowserRouter>
    </HelmetProvider>,
  document.getElementById('root')
);

reportWebVitals();
