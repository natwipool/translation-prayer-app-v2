import React from 'react';
import { connect } from 'react-redux';
import LyricsList from './LyricsList';

const LyricsPage = (props) => (
  <div>
    <LyricsList 
      playlist={props.playlists.find((playlist, index) =>
        index === props.index
      )}
      openModal={props.openModal}
      handleCloseModal={props.handleCloseModal}
    />
  </div>
);

const mapStateToProps = (state) => ({
  showLyricModal: state.modal.showLyricModal
});

export default connect(mapStateToProps)(LyricsPage);