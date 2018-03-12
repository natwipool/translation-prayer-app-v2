import React from 'react';
import { connect } from 'react-redux';
import PlaylistForm from './PlaylistForm';
import { startAddPlaylist, addPlaylist } from '../actions/playlists';

export class AddPlaylistPage extends React.Component {
  onSubmit = playlist => {
    this.props.startAddPlaylist(playlist);
    this.props.history.push('/playlists');
  };
  render() {
    return (
      <div>
        <h3>สร้างรายการสวดมนต์</h3>
        <PlaylistForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddPlaylist: playlist => dispatch(startAddPlaylist(playlist))
});

export default connect(undefined, mapDispatchToProps)(AddPlaylistPage);
