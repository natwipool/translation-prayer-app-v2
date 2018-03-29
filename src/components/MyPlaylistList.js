import React from 'react';
import { connect } from 'react-redux';
import { setIndex, setPlaying, closePlayer } from '../actions/players';
import PlayerOptions from './PlayerOptions';
import MyPlaylistListItem from './MyPlaylistListItem';
import Player from './Player';
import LyricsPage from './LyricsPage';
import getPlaylistData from '../utils/get-playlist-data';

export class MyPlaylistList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openModal: false
    };
  }

  handleOpenModal = () => {
    this.setState(() => ({ openModal: true }));
    this.props.setIndex(this.props.players.index);
  };

  handleCloseModal = () => {
    this.setState(() => ({ openModal: false }));
  };

  onPlayByIndex = index => {
    this.props.setIndex(index);
    this.props.setPlaying(true);
    this.setState(() => ({ openModal: true }));
  };

  onClosePlayer = () => {
    this.props.closePlayer();
  };

  render() {
    return (
      <div
        className={
          'content-container-body ' +
          (!this.props.players.closePlayer && 'content-container-player')
        }
      >
        <LyricsPage
          playlists={this.props.playlists}
          index={this.props.players.index}
          openModal={this.state.openModal}
          handleCloseModal={this.handleCloseModal}
        />

        <div className="list-header">
          <PlayerOptions onClosePlayer={this.onClosePlayer} />
        </div>
        {this.props.playlists.map((playlist, index) => (
          <div key={index} className="list-item">
            <MyPlaylistListItem {...playlist} />
            <button
              className="music-button"
              onClick={() => {
                this.onPlayByIndex(index);
              }}
            >
              {this.props.players.closePlayer ? (
                this.state.openModal && this.props.players.index === index ? (
                  <img src="/images/open-book.png" />
                ) : (
                  <img src="/images/book.png" />
                )
              ) : this.props.players.isPlaying &&
              this.props.players.index === index ? (
                this.state.openModal ? (
                  <img src="/images/open-book.png" />
                ) : (
                  <img src="/images/book.png" />
                )
              ) : (
                <img src="/images/play.png" />
              )}
            </button>
          </div>
        ))}
        {!this.props.players.closePlayer && (
          <Player playlists={this.props.playlists} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  playlists: getPlaylistData(state.transPrayers, props.lists),
  players: state.players
});

const mapDispatchToProps = dispatch => ({
  setIndex: index => dispatch(setIndex(index)),
  setPlaying: boolean => dispatch(setPlaying(boolean)),
  closePlayer: () => dispatch(closePlayer())
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPlaylistList);
