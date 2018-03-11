import React from 'react';
import { shallow } from 'enzyme';
import { AddPlaylistPage } from '../../components/AddPlaylistPage';
import playlists from '../fixtures/playlists';

let addPlaylist, history, wrapper;

beforeEach(() => {
  addPlaylist = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddPlaylistPage
    addPlaylist={addPlaylist}
    history={history}
  />);
});

test('should render AddPlaylistPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit correctly', () => {
  wrapper.find('Connect(PlaylistForm)').prop('onSubmit')(playlists[2]);
  expect(history.push).toHaveBeenLastCalledWith('/playlists');
  expect(addPlaylist).toHaveBeenLastCalledWith(playlists[2]);
});