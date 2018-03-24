import React from 'react';
import { connect } from 'react-redux';
import getPlaylistData from '../utils/get-playlist-data'; 
import durationTotal from '../utils/duration-total.js';
import formatTime from '../utils/format-time';

export const PlaylistSummary = ({ preceptCount, durationTotal }) => {
  const formattedTime = formatTime(durationTotal)
  return (
    <div>
      <p className="page-header__summary">
        บทสวดมนต์ <span>{preceptCount}</span> บท, เวลา <span>{formattedTime}</span> นาที
      </p>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  const fullPlaylistData = getPlaylistData(state.transPrayers, props.playlist.lists);
  
  return {
    preceptCount: fullPlaylistData.length,
    durationTotal: durationTotal(fullPlaylistData)
  }
}

export default connect(mapStateToProps)(PlaylistSummary);
