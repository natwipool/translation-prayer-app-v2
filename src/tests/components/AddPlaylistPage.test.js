import React from 'react';
import { shallow } from 'enzyme';
import { AddPlaylistPage } from '../../components/AddPlaylistPage';
import playlists from '../fixtures/playlists';

let startAddPlaylist, history, wrapper;

beforeEach(() => {
  startAddPlaylist = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddPlaylistPage
    startAddPlaylist={startAddPlaylist}
    history={history}
  />);
});

test('should render AddPlaylistPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit correctly', () => {
  wrapper.find('Connect(PlaylistForm)').prop('onSubmit')(playlists[2]);
  expect(history.push).toHaveBeenLastCalledWith('/playlists');
  expect(startAddPlaylist).toHaveBeenLastCalledWith(playlists[2]);
});