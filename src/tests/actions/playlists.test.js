import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddPlaylist, addPlaylist, editPlaylist, removePlaylist } from '../../actions/playlists';
import playlists from '../fixtures/playlists';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('should setup remove playlist action object', () => {
  const action = removePlaylist({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_PLAYLIST',
    id: '123abc'
  });
});

test('should setup edit playlist action object', () => {
  const id = '123abc'
  const updates = {
    description: 'test',
    lists: ['123', 'abc']
  }
  const action = editPlaylist(id, updates);
  expect(action).toEqual({
    type: 'EDIT_PLAYLIST',
    id: '123abc',
    updates: { ...updates }
  });
});

test('should setup add playlist with playlist data', () => {
  const action = addPlaylist(playlists[2]);
  expect(action).toEqual({
    type: 'ADD_PLAYLIST',
    playlist: playlists[2]
  });
});

test('should add playlist to database and store', (done) => {
  const store = createMockStore({});
  const playlistData = {
    description: 'Add me',
    lists: ['123', '456']
  };

  store.dispatch(startAddPlaylist(playlistData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_PLAYLIST',
      playlist: {
        id: expect.any(String),
        ...playlistData
      }
    });

    return database.ref(`playlists/${actions[0].playlist.id}`).once('value'); 
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(playlistData);
    done();
  });  
});

test('should add playlist with defaults to database and store', (done) => {
  const store = createMockStore({});
  const playlistDefaults = {
    description: '',
    lists: []
  };

  store.dispatch(startAddPlaylist({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_PLAYLIST',
      playlist: {
        id: expect.any(String),
        ...playlistDefaults
      }
    });

    return database.ref(`playlists/${actions[0].playlist.id}`).once('value'); 
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual({ description: '' });
    done();
  });  
});