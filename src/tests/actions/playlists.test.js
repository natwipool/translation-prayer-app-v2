import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startAddPlaylist,
  addPlaylist,
  editPlaylist,
  startEditPlaylist,
  removePlaylist,
  startRemovePlaylist,
  setPlaylists,
  startSetPlaylists
} from '../../actions/playlists';
import playlists from '../fixtures/playlists';
import database from '../../firebase/firebase';

const uid = 'thisistestuid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const playlistData = {};
  playlists.forEach(({ id, description, lists }) => {
    playlistData[id] = { description, lists }
  });
  database.ref(`users/${uid}/playlists`).set(playlistData).then(() => done());
});

test('should setup remove playlist action object', () => {
  const action = removePlaylist({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_PLAYLIST',
    id: '123abc'
  });
});

test('should remove playlists from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = playlists[2].id;

  store.dispatch(startRemovePlaylist({ id })).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_PLAYLIST',
      id
    });
    return database.ref(`users/${uid}/playlists/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy();
    done();
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

test('should edit playlist from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = playlists[0].id;
  const updates = { description: 'updated desc', lists: ['aaa', 'bbb']}
  store.dispatch(startEditPlaylist(id, updates)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'EDIT_PLAYLIST',
      id,
      updates
    });
    return database.ref(`users/${uid}/playlists/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(updates);
    done();
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
  const store = createMockStore(defaultAuthState);
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

    return database.ref(`users/${uid}/playlists/${actions[0].playlist.id}`).once('value'); 
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(playlistData);
    done();
  });  
});

test('should add playlist with defaults to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
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

    return database.ref(`users/${uid}/playlists/${actions[0].playlist.id}`).once('value'); 
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual({ description: '' });
    done();
  });  
});

test('should setup set playlists action object with data', () => {
  const action = setPlaylists(playlists);
  expect(action).toEqual({
    type: 'SET_PLAYLISTS',
    playlists
  });
});

test('should fetch the playlists from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetPlaylists()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_PLAYLISTS',
      playlists
    });
    done();
  });
});