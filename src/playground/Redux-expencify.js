// import uuid from 'uuid';

// store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//   console.log(visibleExpenses);
// }); 

// const expense1 = store.dispatch(addExpense({ description: 'rent', amount: 100, createdAt: -1000}));
// const expense2 = store.dispatch(addExpense({ description: 'Wendies', amount: 10, createdAt: 1000}));
// // const expense3 = store.dispatch(addExpense({ description: 'Pizza', amount: 300 }));

// // store.dispatch(removeExpense({ id: expense3.expense.id }));
// // store.dispatch(removeExpense({ id: expense1.expense.id }));
// // store.dispatch(editExpense(expense2.expense.id, { amount: 1500 }));

// // store.dispatch(setTextFilter('end'));
// // store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// // store.dispatch(sortByDate());

// // store.dispatch(setStartDate(0));
// // store.dispatch(setStartDate());
// // store.dispatch(setEndDate(1250));
// // store.dispatch(setEndDate());



const demoState = {
  expenses: [{
    id: '1',
    description: 'Rent',
    note: 'this is a note about my rent',
    amount: 54500,
    createdAt: 0
  }], 
  filters: 
  {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
};
