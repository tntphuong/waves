import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/layout';
import Auth from './hoc/auth';
import Home from './components/Home';
import RegisterLogin from './components/Register_Login';
import Register from './components/Register_Login/register';
import UserDashBoard from './components/User';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route
          path="/user/dashboard"
          exact
          component={Auth(UserDashBoard, true)}
        />

        <Route path="/" exact component={Auth(Home, null)} />
        <Route
          path="/register_login"
          exact
          component={Auth(RegisterLogin, false)}
        />
        <Route path="/Register" exact component={Auth(Register, false)} />
      </Switch>
    </Layout>
  );
};

export default Routes;
