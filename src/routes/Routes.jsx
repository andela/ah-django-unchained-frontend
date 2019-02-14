import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../components/Login';
import NavBar from '../components/NavBar/index';
import Signup from '../pages/Signup';

const Routes = () => {
  return (
    <BrowserRouter>
    <div>
    <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route signup path='/signup' component={Signup} />
      </Switch>
      </div>
    </BrowserRouter>
  );
};
export default Routes;
