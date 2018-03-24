import React from 'react';
import { connect } from 'react-redux';
import PlaylistListItem from './PlaylistListItem';

export const PlaylistList = props => (
  <div className="content-container-body">
    <div className="list-body">
      <div className="list-header" />
      {props.playlists.length === 0 ? (
        <div className="playlist-item playlist-item--message">
          <span>ไม่มีรายการสวดมนต์</span>
        </div>
      ) : (
        props.playlists.map(playlist => (
          <PlaylistListItem key={playlist.id} {...playlist} />
        ))
      )}
    </div>
  </div>
);

const mapStateToProps = state => ({
  playlists: state.playlists
});

export default connect(mapStateToProps)(PlaylistList);
