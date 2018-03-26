import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import LyricsListItem from './LyricsListItem';

const LyricsList = (props) => (
  <Modal
    show={props.openModal}
    onHide={props.handleCloseModal}
  >
    <div>
      <div>
      <h3>{props.playlist.precept}</h3>
      <button onClick={props.handleCloseModal}>close</button>
      </div>
      {props.playlist.lyrics.map((lyric, index) => 
        <LyricsListItem
          key={index}
          lyric={lyric}
        />
      )}
    </div>
  </Modal>
);

const mapDispatchToProps = (dispatch) => ({
  handleShowLyricModal: showModal => dispatch(handleShowLyricModal(showModal))
});

export default connect(undefined, mapDispatchToProps)(LyricsList);