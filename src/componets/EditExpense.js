import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/dashboard');
  }
  onClick = () => {
    this.props.removeExpense(this.props.expense.id);
    this.props.history.push('/dashboard');
  }
  render() {
    return (
      <div>
        <div className='page-header'>
          <div className='content-container'>
              <h1 className='page-header__title'>Edit Expense</h1>
          </div>
        </div>
        <div className='content-container'>
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
            submitButton={'Save Expense'}
          />
          <button className='button button--gray' onClick={this.onClick}>Remove Expense</button>
        </div>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  editExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  removeExpense: (id) => dispatch(startRemoveExpense(id))
});

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);