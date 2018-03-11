import { addPlaylist, editPlaylist, removePlaylist } from '../../actions/playlists';

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
  const playlist = {
    description: 'test add playlist',
    lists: ['123', 'abc']
  }
  const action = addPlaylist(playlist);
  expect(action).toEqual({
    type: 'ADD_PLAYLIST',
    playlist: {
      ...playlist,
      id: expect.any(String)
    }
  })
});

test('should setup add playlist with default data', () => {
  const action = addPlaylist();
  expect(action).toEqual({
    type: 'ADD_PLAYLIST',
    playlist: {
      id: expect.any(String),
      description: '',
      lists: []
    }
  })
});