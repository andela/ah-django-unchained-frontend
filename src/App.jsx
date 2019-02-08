import './App.css';
import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './view/Home'
import Login from './components/Login'
import Routes from './routes/routes';

class App extends Component {
  render() {
    return (
      <Routes />
    );
  }
}

export default App;
