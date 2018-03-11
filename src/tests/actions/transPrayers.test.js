import { setTransPrayers } from '../../actions/transPrayers';
import transPrayersData from '../fixtures/transPrayers';

test('should setup trans-prayer default data correctly', () => {
  const action = setTransPrayers();
  expect(action).toEqual({
    type: 'SET_TRANS_PRAYER',
    transPrayers: []
  });
});

test('should setup trans-prayer data correctly', () => {
  const action = setTransPrayers(transPrayersData);
  expect(action).toEqual({
    type: 'SET_TRANS_PRAYER',
    transPrayers: [...transPrayersData]
  });
});
