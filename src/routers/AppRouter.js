import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'; 
import { LoginPage }        from '../componets/LoginPage';
import ExpenseDashboardPage from '../componets/DashBoard';
import AddExpensePage       from '../componets/AddExpense';
import EditExpensePage      from '../componets/EditExpense';
import HelpPage             from '../componets/Help';
import NotFound             from '../componets/NotFound';
import Header               from '../componets/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <Route path="/dashboard" component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;