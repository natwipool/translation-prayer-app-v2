import durationTotal from '../../utils/duration-total';
import transPrayers from '../fixtures/transPrayers';

test('should return 0 if no playlists', () => {
  const res = durationTotal([]);
  expect(res).toBe(0);
});

test('should return duration correctly in one playlist', () => {
  const res = durationTotal([transPrayers[0]]);
  expect(res).toBe(155.99425);
});

test('should return duration correctly in multiple playlists', () => {
  const res = durationTotal(transPrayers);
  expect(res).toBe(468.98275);
});