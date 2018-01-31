import React from 'react';
import { NavLink } from 'react-router-dom'; 

const Header = () => (
  <div>
    <h1>Expensify</h1>
    <NavLink activeClassName="is-active" to="/" exact={true}>Home Page</NavLink>
    <NavLink activeClassName="is-active" to="/create">Add Expense</NavLink>
  </div>
);
// <NavLink activeClassName="is-active" to="/help">Help</NavLink>

export default Header;