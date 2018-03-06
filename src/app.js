import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { setTransPrayers } from './actions/transPrayers';
import { addPlaylist } from './actions/playlists';
import getPlaylistData from './utils/getPlaylistData';
import transPrayersData from './data/transPrayersData';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(setTransPrayers(transPrayersData));

store.dispatch(addPlaylist(
  { description: 'My first playlist', lists: ['อภิณหปัจจเวกขณปาฐะ', 'บทพิจารณาสังขาร'] })
)

const playlistTwo = store.dispatch(addPlaylist(
  { description: 'My secound playlist', lists: ['สัพพปัตติทานคาถา', 'บทแผ่เมตตา'] })
)

const state = store.getState();
const getFullPlaylist = getPlaylistData(state.transPrayers, playlistTwo.playlist.lists);
console.log(state)
console.log(getFullPlaylist);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
