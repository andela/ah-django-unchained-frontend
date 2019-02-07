import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './view/Home'
import Login from './components/Login'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/login' component={Login}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
