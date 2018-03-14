import authReducer from '../../reducers/auth';

test('should set uid from login', () => {
  const action = {
    type: 'LOGIN',
    uid: 'abc123'
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test('should clear uid from logout', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({ uid: '123456' }, action);
  expect(state).toEqual({});
});