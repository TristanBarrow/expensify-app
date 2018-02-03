import React from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpenseSummary = (props) => (
  <div>
    Viewing {props.expenseCount} expense{props.expenseCount === 1 ? '' : 's'
  } for a total of {
      numeral(props.expensesTotal / 100).format('$0,0.00')}.
  </div>
);

const mapStateToProps = (state) => ({
    expenseCount: getVisibleExpenses(state.expenses, state.filters).length,
    expensesTotal: getExpensesTotal(
      getVisibleExpenses(
        state.expenses, 
        state.filters
      )
    )
  });

export default connect(mapStateToProps)(ExpenseSummary);