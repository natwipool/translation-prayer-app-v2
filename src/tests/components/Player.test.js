import React from 'react';
import { shallow } from 'enzyme';
import { Player } from '../../components/Player';
import transPrayers from '../fixtures/transPrayers';
import players from '../fixtures/players';

let isPlayingToggle,
incrementIndex,
decrementIndex,
wrapper;

beforeEach(() => {
  isPlayingToggle = jest.fn();
  incrementIndex = jest.fn();
  decrementIndex = jest.fn();

  wrapper = shallow(<Player
    isPlayingToggle={isPlayingToggle}
    incrementIndex={incrementIndex}
    decrementIndex={decrementIndex}
    players={players.notPlaying}
    playlists={transPrayers}
  />);
});

test('should render Player correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onTogglePlaying correctly', () => {
  wrapper.find('button').at(1).simulate('click');
  expect(isPlayingToggle).toHaveBeenCalled();
});

test('should handle onNextClick correctly', () => {
  wrapper.find('button').at(2).simulate('click');
  expect(incrementIndex).toHaveBeenCalled();
});

test('should handle onPrevClick correctly', () => {
  wrapper.find('button').at(0).simulate('click');
  expect(decrementIndex).toHaveBeenCalled();
});



