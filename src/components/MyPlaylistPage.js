import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MyPlaylistList from './MyPlaylistList';
import PlaylistSummary from './PlaylistSummary';
import { startRemovePlaylist } from '../actions/playlists';

export class MyPlaylistPage extends React.Component {
  onRemove = () => {
    this.props.startRemovePlaylist({ id: this.props.playlist.id });
    this.props.history.push('/playlists');
  };
  render() {
    return (
      <div>
        <div div className="page-header">
          <div className="content-container-body">
            <h2 className="page-header__title">{this.props.playlist.description}</h2>
            <PlaylistSummary playlist={this.props.playlist} />
            <Link to={`/edit/${this.props.playlist.id}`}>
              <button className="button--secondary">แก้ไข</button>
            </Link>
            <button className="button--secondary button-delete" onClick={this.onRemove}>ลบ</button>
          </div>
        </div>
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
  startRemovePlaylist: id => dispatch(startRemovePlaylist(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPlaylistPage);
