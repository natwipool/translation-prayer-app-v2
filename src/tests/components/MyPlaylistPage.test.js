import React from 'react';
import { shallow } from 'enzyme';
import { MyPlaylistPage } from '../../components/MyPlaylistPage';
import playlists from '../fixtures/playlists';

let startRemovePlaylist, history, wrapper;

beforeEach(() => {
  startRemovePlaylist = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<MyPlaylistPage
    startRemovePlaylist={startRemovePlaylist}
    history={history}
    playlist={playlists[0]}
  />);
});

test('should render MyPlaylistPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onRemove correctly', () => {
  wrapper.find('button').at(1).simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/playlists');
  expect(startRemovePlaylist).toHaveBeenLastCalledWith({
    id: playlists[0].id
  });
});