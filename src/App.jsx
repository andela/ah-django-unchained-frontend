import React from 'react';
import Routes from './routes/Routes';
import './App.scss';
import NavBar from './components/NavBar/index';

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes />
    </div>
  );
};

export default App;
