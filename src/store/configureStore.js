import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import transPrayersReducer from '../reducers/transPrayers';
import playlistsReducer from '../reducers/playlists';
import playerReducer from '../reducers/players';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX__DEVTOOLS__EXTENSION__COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      transPrayers: transPrayersReducer,
      playlists: playlistsReducer,
      players: playerReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
