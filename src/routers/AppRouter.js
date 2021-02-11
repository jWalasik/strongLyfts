import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
//import createHistory from 'history/createBrowserHistory';
import { createBrowserHistory } from 'history'
import DashboardPage from '../components/DashboardPage';
import WorkoutPage from '../components/WorkoutPage';
import SettingsPage from '../components/SettingsPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/workout" component={WorkoutPage} />
        <PrivateRoute path="/settings" component={SettingsPage} />
        <Route component={NotFoundPage} />
      </Switch>
  </Router>
);

export default AppRouter;
