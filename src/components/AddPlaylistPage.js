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
        <div className="page-header">
          <div className="content-container-body">
            <h3 className="page-header__title">เพิ่มรายการสวดมนต์</h3>
          </div>
        </div>
        <div className="content-container-body">
          <PlaylistForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddPlaylist: playlist => dispatch(startAddPlaylist(playlist))
});

export default connect(undefined, mapDispatchToProps)(AddPlaylistPage);
