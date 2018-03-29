import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import { firebase } from './firebase/firebase';
import configureStore from './store/configureStore';
import { startSetPlaylists } from './actions/playlists';
import { setTransPrayers } from './actions/transPrayers';
import { login, logout } from './actions/auth';
import { handleShowLoginModal } from './actions/modal';
import transPrayersJSON from './data/transPrayersData.json';
import LoadingPage from './components/LoadingPage';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

store.dispatch(setTransPrayers(transPrayersJSON));

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged(user => {

  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(handleShowLoginModal());
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
