import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <AppRouter />
      </div>
    </BrowserRouter>
  )
};

export default App