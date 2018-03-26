import React from 'react';
import { connect } from 'react-redux';
import { setIndex, setPlaying } from '../actions/players';
import TransPrayerListItem from './TransPrayerListItem';
import Player from './Player';
import LyricsPage from './LyricsPage';

export class TransPrayerList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openModal: false
    };
  }

  handleOpenModal = index => {
    this.setState(() => ({ openModal: true }));
    this.props.setIndex(index);
  };

  handleCloseModal = () => {
    this.setState(() => ({ openModal: false }));
  };

  onPlayByIndex = index => {
    this.props.setIndex(index);
    this.props.setPlaying(true);
    this.setState(() => ({ openModal: true }));
  };

  render() {
    return (
      <div className="content-container-body content-container-player">
        <LyricsPage
          playlists={this.props.transPrayers}
          index={this.props.players.index}
          openModal={this.state.openModal}
          handleCloseModal={this.handleCloseModal}
        />

        <div className="list-header" />
        {this.props.transPrayers.map((tranPrayer, index) => (
          <div key={index} className="list-item">
            <TransPrayerListItem {...tranPrayer} />
            <button
              className="music-button"
              onClick={() => {
                this.onPlayByIndex(index);
              }}
            >
              {this.props.players.isPlaying &&
              this.props.players.index === index ? (
                <img src="/images/sound-bars.png" />
              ) : (
                <img src="/images/play.png" />
              )}
            </button>
          </div>
        ))}
        <Player
          playlists={this.props.transPrayers}
          handleOpenModal={this.handleOpenModal}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  transPrayers: state.transPrayers,
  players: state.players
});

const mapDiapatchToProps = (dispatch, props) => ({
  setIndex: index => dispatch(setIndex(index)),
  setPlaying: boolean => dispatch(setPlaying(boolean))
});

export default connect(mapStateToProps, mapDiapatchToProps)(TransPrayerList);
