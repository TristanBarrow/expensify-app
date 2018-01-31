import React      from 'react';
import ReactDOM   from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter  from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

store.dispatch(addExpense({
  description: 'Water Bill',
  note: 'This is my water Bill',
  amount: 2,
  createdAt: 1
}));

store.dispatch(addExpense({
  description: 'Gas Bill',
  note: 'This is my gas Bill',
  amount: 1,
  createdAt: 2
}));

store.dispatch(addExpense({
  description: 'Rent',
  note: 'This is my rent Bill',
  amount: 3,
  createdAt: 3
}));


console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
); 


ReactDOM.render(jsx , document.getElementById("app"));

