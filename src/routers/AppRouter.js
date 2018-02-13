import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'; 
import createHistory        from 'history/createBrowserHistory';
import LoginPage            from '../componets/LoginPage';
import ExpenseDashboardPage from '../componets/DashBoard';
import AddExpensePage       from '../componets/AddExpense';
import EditExpensePage      from '../componets/EditExpense';
import NotFound             from '../componets/NotFound';
import PrivateRoute         from './PrivateRoute';
import PublicRoute          from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;