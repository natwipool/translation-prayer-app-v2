import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetPlaylists } from './actions/playlists';
import { setTransPrayers } from './actions/transPrayers';
import { login, logout } from './actions/auth';
import { handleShowModal } from './actions/modal';
import transPrayersData from './data/transPrayersData';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { firebase } from './firebase/firebase';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

store.dispatch(setTransPrayers(transPrayersData));

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged(user => {
  
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(handleShowModal());
    store.dispatch(startSetPlaylists()).then(() => {
      renderApp();
  
      if (history.location.pathname === '/login') {
        history.push('/');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
