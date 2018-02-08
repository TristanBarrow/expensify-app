import React from 'react';

export class LoginPage extends React.Component {
  onClick() {
    console.log('You are Logging in...');
  };
  render() {
    return (
      <div>
        <h1>Wecome to Expensify</h1>
        <button onClick={this.onClick}>Login</button>
      </div>
    )
  }
};