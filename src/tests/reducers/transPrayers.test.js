import transPrayersReducers from '../../reducers/transPrayers';
import transPrayers from '../fixtures/transPrayers';

test('should setup default transPrayers value', () => {
  const state = transPrayersReducers(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should setup transPrayers with value', () => {
  const action = {
    type: 'SET_TRANS_PRAYER',
    transPrayers
  }
  const state = transPrayersReducers(undefined, action);
  expect(state).toEqual([...transPrayers]);
});