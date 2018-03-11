import { createStore, combineReducers } from 'redux';
import transPrayersReducer from '../reducers/transPrayers';
import playlistsReducer from '../reducers/playlists';
import playerReducer from '../reducers/players';

export default () => {
  const store = createStore(
    combineReducers({
      transPrayers: transPrayersReducer,
      playlists: playlistsReducer,
      players: playerReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
