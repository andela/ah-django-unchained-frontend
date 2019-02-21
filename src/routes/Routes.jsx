import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/HomePage/index';
import  ArticleDetail  from '../pages/ArticleDetail/index';
import NavBar from '../components/NavBar/index';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage/index';
import ResetPassword from '../pages/PassswordReset';
import UpdatePassword from '../pages/UpdatePassword';
import ArticleForm from '../pages/ArticleForm/index';
import ViewDrafts from '../pages/ViewDraft/index';
import UpdateArticle from '../pages/UpdateArticle/index';

const Routes = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route signup path='/signup' component={SignupPage} />
          <Route one path='/article/:article' component={ArticleDetail} />
          <Route login path="/login" component={LoginPage} />
          <Route passwordrest path='/passwordreset' component={ResetPassword} />
          <Route passwordupdate path='/api/users/passwordresetdone/:token' component={UpdatePassword} />
          <Route updatepublishedarticle path="/updatearticle" component={ArticleForm} />
          <Route draft path="/draft" component={ViewDrafts} />
          <Route updatearticle path="/updatearticle" component={UpdateArticle} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default Routes;
