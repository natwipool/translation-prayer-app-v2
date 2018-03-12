import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetPlaylists } from './actions/playlists';
import { setTransPrayers } from './actions/transPrayers';
import transPrayersData from './data/transPrayersData';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './firebase/firebase';

const store = configureStore();

store.dispatch(setTransPrayers(transPrayersData));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)


ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetPlaylists()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});

