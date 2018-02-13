import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
  addExpense, 
  removeExpense, 
  editExpense, 
  startAddExpense, 
  setExpenses, 
  startSetExpenses, 
  startRemoveExpense,
  startEditExpense
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const uid = 'Test User ID';
const defaultAuthState = { auth: { uid }};
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });

  database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});


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

  const action = { // expense action object
    type: 'ADD_EXPENSE',
    expense: expenses[0]
  };
  expect(addExpense(expenses[0])).toEqual(action);
});

test('Add expense to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const expenseData = {
    description: 'ABC',
    note: 'Test Note',
    amount: 300,
    createdAt: 1000
  };

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });
    
    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');

  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });;
});

test('Add expense to database with defaults and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const defaultExpense = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };

  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...defaultExpense
      }
    });

    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(defaultExpense);
    done();
  });;
});

test('Setup set expense action object', () => { 
  const action = { type: 'SET_EXPENSES', expenses };
  expect(setExpenses(expenses)).toEqual(action);
});

test('Fetch expenses from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
    done();
  });
});

test('Remove expenses from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = 'Test ID';

  store.dispatch(startRemoveExpense(id)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    });
    return database.ref(`users/${uid}/expenses/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy();
    done();
  })
});

test('Edit expense in firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[0].id;
  const updates = {
    description: 'Edited description',
    amount: 999,
    createdAt: 888,
    note: 'Edited note'
  };

  store.dispatch(startEditExpense(id, updates)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    });

    return database.ref(`users/${uid}/expenses/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(updates);
    done();
  });


});