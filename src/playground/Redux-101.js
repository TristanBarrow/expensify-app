import { createStore } from 'redux'

const incrementBy = ({incBy = 1} = {}) => ({
  type: 'INCREMENT',
  incBy
});

const decrementBy = ({decBy = 1} = {}) => ({
  type: 'DECREMENT',
  decBy
});

const setCount= ({to = 0}) => ({
  type: 'SET',
  to
});

const reset = () => ({
  type: 'RESET'
});

const countReducer = (state = { count: 0}, action) => {
  switch (action.type)
  {
    case 'INCREMENT':
      return { count: state.count + action.incBy };
    case 'DECREMENT':
      const decBy = (typeof action.decBy === 'number') ? action.decBy : 1;
      return { count: state.count - action.decBy };
    case 'SET':
      return { count: action.to };
    case 'RESET':
      return { count: 0 };
    default:
      return state;     
  }
};


const store = createStore(countReducer ); 
console.log("Starting at: ", store.getState());





store.dispatch(setCount({ to: 43 })); 

store.dispatch(decrementBy({ decBy: 10 })); 

store.dispatch(incrementBy({ incBy: 4 })); 

store.dispatch(reset());
