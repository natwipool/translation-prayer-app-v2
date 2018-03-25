import React from 'react';
import { shallow } from 'enzyme';
import { MyPlaylistPage } from '../../components/MyPlaylistPage';
import playlists from '../fixtures/playlists';

let startRemovePlaylist, history, wrapper;

beforeEach(() => {
  // startRemovePlaylist = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<MyPlaylistPage
    // startRemovePlaylist={startRemovePlaylist}
    playlist={playlists[0]}
    history={history}
  />);
});

test('should render MyPlaylistPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});