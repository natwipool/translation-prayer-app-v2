import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import transPrayersReducer from '../reducers/transPrayers';
import playlistsReducer from '../reducers/playlists';
import playerReducer from '../reducers/players';
import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX__DEVTOOLS__EXTENSION__COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      transPrayers: transPrayersReducer,
      playlists: playlistsReducer,
      players: playerReducer,
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
