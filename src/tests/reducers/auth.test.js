import authReducer from '../../reducers/auth';

test('test auth reducer login', () => {
  const uid = 'Test Login ID';
  const actionObject = {
    type: 'LOGIN',
    uid
  };
  expect(authReducer(undefined, actionObject)).toEqual({
    uid
  });
});

test('test auth reducer logout', () => {
  const actionObject = {
    type: 'LOGOUT'
  };
  expect(authReducer({uid: 'Replacement ID'}, actionObject)).toEqual({});
});