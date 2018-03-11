import React from 'react';
import { shallow } from 'enzyme';
import { EditPlaylistPage } from '../../components/EditPlaylistPage';
import playlists from '../fixtures/playlists';

let editPlaylist, history, wrapper;

beforeEach(() => {
  editPlaylist = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<EditPlaylistPage
    editPlaylist={editPlaylist}
    history={history}
    playlist={playlists[0]}
  />);
});

test('should render EditPlaylistPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit correctly', () => {
  wrapper.find('Connect(PlaylistForm)').prop('onSubmit')(playlists[0]);
  expect(history.push).toHaveBeenLastCalledWith(`/playlist/${playlists[0].id}`);
  expect(editPlaylist).toHaveBeenLastCalledWith(playlists[0].id, playlists[0]);
});