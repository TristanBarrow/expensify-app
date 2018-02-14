import React from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

export const ExpenseSummary = ({ expenseCount, expensesTotal }) => {
  const plural = expenseCount === 1 ? '' : 's';
  const formatedTotal = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <div className='page-header'>
      <div className='content-container'>
        <h1 className='page-header__title'>
          Viewing <span>{expenseCount}</span> expense{plural} for a total of <span>{formatedTotal}</span>.
        </h1>
        <div className='page-header__actions'>
          <Link className='button' to='/create'>Add Expense</Link>
        </div>
      </div>
    </div>
  );
};


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