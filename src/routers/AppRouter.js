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
import PrefacePage from '../components/PrefacePage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={PrefacePage} exact={true} />
        <PublicRoute path="/trans-prayers" component={TransPrayerDashboardPage} />
        <PublicRoute path="/login" component={LoginPage} />
        <PrivateRoute path="/playlists" component={PlaylistDashboardPage} />
        <PrivateRoute path="/playlist/:id" component={MyPlaylistPage} />
        <PrivateRoute path="/create" component={AddPlaylistPage} />
        <PrivateRoute path="/edit/:id" component={EditPlaylistPage} />
        <PublicRoute path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter;