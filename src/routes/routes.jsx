import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Profile from '../pages/Profile';
import Login from '../components/Login';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route signup path='/signup' component={Signup} />
        <Route path='/login' component={ Login } />
        <Route path='/profile' component={ Profile }></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
