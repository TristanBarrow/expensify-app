import { login, logout } from '../../actions/auth';

test('Setup login action object', () => {
  const uid = 'Test Login ID';
  expect(login(uid)).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('Setup logout action object', () => {
  expect(logout()).toEqual({
    type: 'LOGOUT'
  });
});