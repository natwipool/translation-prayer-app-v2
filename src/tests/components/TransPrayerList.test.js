import React from 'react';
import { shallow } from 'enzyme';
import { TransPrayerList } from '../../components/TransPrayerList';
import transPrayers from '../fixtures/transPrayers';
import players from '../fixtures/players';

let setIndex, setPlaying, wrapper;

beforeEach(() => {
  setIndex = jest.fn();
  setPlaying = jest.fn();

  wrapper = shallow(<TransPrayerList
    setIndex={setIndex}
    setPlaying={setPlaying}
    transPrayers={transPrayers}
    players={players.notPlaying}
  />);
});

test('should render TransPrayerList with playlists', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onPlayByIndex correctly', () => {
  wrapper.find('button').at(0).simulate('click');
  expect(setIndex).toHaveBeenLastCalledWith(0);
  expect(setPlaying).toHaveBeenLastCalledWith(true);
});
