import React from 'react';
import { connect } from 'react-redux';
import getPlaylistData from '../utils/getPlaylistData';
import MyPlaylistListItem from './MyPlaylistListItem';

const MyPlaylistList = (props) => {
  
  return (
    <div>
      {props.playlists.map((playlist, index) => 
        <MyPlaylistListItem 
          key={index}
          {...playlist}
        />
      )}
    </div>
  )
};

const mapStateToProps = (state, props) => ({
  playlists: getPlaylistData(state.transPrayers, props.lists)
});

export default connect(mapStateToProps)(MyPlaylistList);