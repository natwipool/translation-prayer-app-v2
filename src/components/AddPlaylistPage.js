import React from 'react';
import { connect } from 'react-redux';
import PlaylistForm from './PlaylistForm';
import { addPlaylist } from '../actions/playlists';

export class AddPlaylistPage extends React.Component {
  onSubmit = playlist => {
    this.props.addPlaylist(playlist);
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
  addPlaylist: playlist => dispatch(addPlaylist(playlist))
});

export default connect(undefined, mapDispatchToProps)(AddPlaylistPage);
