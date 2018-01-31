import { addExpense, removeExpense, editExpense } from '../../actions/expenses';


test('Set up remove expense action object', () => {
  const action = { id: 100, type: "REMOVE_EXPENSE"};
  expect(removeExpense({ id: 100 })).toEqual(action);
});


test('Set up edit expense action object', () => {
  const updates = { firstItem: "1st item", secondItem: "2nd item" } // updates
  const action = { // output
    type: "EDIT_EXPENSE", 
    id: 100, 
    updates: { 
      firstItem: "1st item", 
      secondItem: "2nd item" 
    }
  };

  expect(editExpense(100 /* id */, updates)).toEqual(action);
});

test('Set up a non-default add expense action object', () => {
  const expense = { // a single expense
    description: 'Description Test',
    note: 'Note Test',
    amount: 100,
    createdAt: 101
  };
  const action = { // expense action object
    type: 'ADD_EXPENSE',
    expense: {
      ...expense,
      id: expect.any(String)
    }
  };
  expect(addExpense(expense)).toEqual(action);
});

test('Set up default add expense action object', () => {
  // no paramiters
  const action = { // default expense
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  };

  expect(addExpense()).toEqual(action);
});
