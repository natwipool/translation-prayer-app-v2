import playlistsReducer from '../../reducers/playlists';
import playlists from '../fixtures/playlists';

test('should setup default playlist value', () => {
  const state = playlistsReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove playlist by id', () => {
  const action = {
    type: 'REMOVE_PLAYLIST',
    id: playlists[1].id
  };
  const state = playlistsReducer(playlists, action);
  expect(state).toEqual([playlists[0], playlists[2]]);
});

test('should not remove playlist if id not found', () => {
  const action = {
    type: 'REMOVE_PLAYLIST',
    id: '999'
  };
  const state = playlistsReducer(playlists, action);
  expect(state).toEqual(playlists);
});

test('should add a playlist with value', () => {
  const action = {
    type: 'ADD_PLAYLIST',
    playlist: playlists[2]
  }
  const state = playlistsReducer(undefined, action);
  expect(state).toEqual([playlists[2]]);
});

test('should edit a playlist', () => {
  const description = 'Playlist Three has been update';
  const action = {
    type: 'EDIT_PLAYLIST',
    id: playlists[2].id,
    updates: {
      description
    }
  }
  const state = playlistsReducer(playlists, action);
  expect(state[2].description).toBe(description);
});

test('should not edit a playlist if id not found', () => {
  const description = 'Playlist Three has been update';
  const action = {
    type: 'EDIT_PLAYLIST',
    id: '888',
    updates: {
      description
    }
  }
  const state = playlistsReducer(playlists, action);
  expect(state).toEqual(playlists);
});

test('should set playlists', () => {
  const action = {
    type: 'SET_PLAYLISTS',
    playlists: [playlists[1]]
  };
  const state = playlistsReducer(playlists, action);
  expect(state).toEqual([playlists[1]]);
});
