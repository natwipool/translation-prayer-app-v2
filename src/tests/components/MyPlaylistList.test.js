import React from 'react';
import { shallow } from 'enzyme';
import { MyPlaylistList } from '../../components/MyPlaylistList';
import transPrayers from '../fixtures/transPrayers';
import players from '../fixtures/players';

let setIndex, setPlaying, wrapper;

beforeEach(() => {
  setIndex = jest.fn();
  setPlaying = jest.fn();

  wrapper = shallow(<MyPlaylistList
    setIndex={setIndex}
    setPlaying={setPlaying}
    playlists={transPrayers}
    players={players.notPlaying}
  />);
});

test('should render MyPlaylistList with playlists', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onPlayByIndex correctly', () => {
  wrapper.find('button').at(0).simulate('click');
  expect(setIndex).toHaveBeenLastCalledWith(0);
  expect(setPlaying).toHaveBeenLastCalledWith(true);
});