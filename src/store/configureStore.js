import { createStore, combineReducers } from 'redux';
import transPrayersReducer from '../reducers/transPrayers';
import playlistsReducer from '../reducers/playlists';

export default () => {
  const store = createStore(
    combineReducers({
      transPrayers: transPrayersReducer,
      playlists: playlistsReducer
    })
  );

  return store;
}
