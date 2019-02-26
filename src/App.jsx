import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import Routes from './routes/Routes';
import './App.scss';

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes />
    </div>
  );
};

export default App;
