import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import LyricsListItem from './LyricsListItem';

export const LyricsList = props => (
  <Modal show={props.openModal} onHide={props.handleCloseModal}>
    <Modal.Header closeButton>
      <Modal.Title className="lyric__title">{props.playlist.precept}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {props.playlist.lyrics.map((lyric, index) => (
        <LyricsListItem key={index} lyric={lyric} />
      ))}
    </Modal.Body>
    <Modal.Footer>
      <button className="button del-button" onClick={props.handleCloseModal}>ปิด</button>
    </Modal.Footer>
  </Modal>
);

const mapStateToProps = state => ({
  players: state.players
});

const mapDispatchToProps = dispatch => ({
  handleShowLyricModal: showModal => dispatch(handleShowLyricModal(showModal))
});

export default connect(mapStateToProps, mapDispatchToProps)(LyricsList);
