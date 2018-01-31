import moment from 'moment';

export default [{
  id: 'ID 1',
  description: 'AAA',
  note: 'Test Note',
  amount: 100,
  createdAt: moment(0).subtract(1, 'month').valueOf()
}, {
  id: 'ID 2',
  description: 'ABC',
  note: 'Test Note',
  amount: 300,
  createdAt: 0
}, {
  id: 'ID 3',
  description: 'CCC',
  note: 'Test Note',
  amount: 200,
  createdAt: moment(0).add(1, 'month').valueOf()
}];