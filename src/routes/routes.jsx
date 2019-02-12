import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Signup from '../pages/Signup';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route signup path='/signup' component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
