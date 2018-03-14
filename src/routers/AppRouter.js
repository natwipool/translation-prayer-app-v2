import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import TransPrayerDashboardPage from '../components/TransPrayerDashboardPage';
import PlaylistDashboardPage from '../components/PlaylistDashboardPage';
import MyPlaylistPage from '../components/MyPlaylistPage';
import AddPlaylistPage from '../components/AddPlaylistPage';
import EditPlaylistPage from '../components/EditPlaylistPage';
import AboutPage from '../components/AboutPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/trans-prayers" component={TransPrayerDashboardPage} />
        <PrivateRoute path="/playlists" component={PlaylistDashboardPage} />
        <PrivateRoute path="/playlist/:id" component={MyPlaylistPage} />
        <PrivateRoute path="/create" component={AddPlaylistPage} />
        <PrivateRoute path="/edit/:id" component={EditPlaylistPage} />
        <PrivateRoute path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter;