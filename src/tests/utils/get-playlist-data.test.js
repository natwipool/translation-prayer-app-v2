import getPlaylistData from '../../utils/get-playlist-data';
import transPrayersData from '../fixtures/transPrayers';

test('should get playlist data correctly', () => {
  const result = getPlaylistData(transPrayersData, ['อริยธนคาถา', 'ติลักขณาทิคาถา']);
  expect(result).toEqual([transPrayersData[1], transPrayersData[2]]);
});