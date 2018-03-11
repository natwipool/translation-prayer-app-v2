import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MyPlaylistList from './MyPlaylistList';
import PlaylistSummary from './PlaylistSummary';
import { removePlaylist } from '../actions/playlists';

export class MyPlaylistPage extends React.Component {
  onRemove = () => {
    this.props.removePlaylist({ id: this.props.playlist.id });
    this.props.history.push('/playlists');
  };
  render() {
    return (
      <div>
        <h1>{this.props.playlist.description}</h1>
        <PlaylistSummary playlist={this.props.playlist} />
        <Link to={`/edit/${this.props.playlist.id}`}>
          <button>แก้ไข</button>
        </Link>
        <button onClick={this.onRemove}>ลบ</button>
        <MyPlaylistList {...this.props.playlist} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  playlist: state.playlists.find(
    playlist => playlist.id === props.match.params.id
  )
});

const mapDispatchToProps = (dispatch, props) => ({
  removePlaylist: id => dispatch(removePlaylist(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPlaylistPage);
