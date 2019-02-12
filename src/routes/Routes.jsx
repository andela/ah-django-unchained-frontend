import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../components/Login';
import NavBar from '../components/NavBar/index';

const Routes = () => {
  return (
    <BrowserRouter>
    <div>
    <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
      </Switch>
      </div>
    </BrowserRouter>
  );
};
export default Routes;
