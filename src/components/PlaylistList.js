import React from 'react';
import { connect } from 'react-redux';
import PlaylistListItem from './PlaylistListItem';

const PlaylistList = (props) => (
  <div> 
    {
      props.playlists.length === 0 ? (
        <p>ไม่มีรายการสวดมนต์</p>
      ) : (
        props.playlists.map((playlist) => 
          <PlaylistListItem 
            key={playlist.id}
            {...playlist}
          />
        )
      )
    }
  </div>
)

const mapStateToProps = (state) => ({
  playlists: state.playlists
});

export default connect(mapStateToProps)(PlaylistList);