import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/HomePage/index';
import ArticleDetail from '../pages/ArticleDetail/index';
import NavBar from '../components/NavBar/index';
import SignupPage from '../pages/SignupPage';

const Routes = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route signup path='/signup' component={SignupPage} />
          <Route exact path='/articleDetail' component={ArticleDetail} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};
export default Routes;
