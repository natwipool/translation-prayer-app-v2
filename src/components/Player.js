import React from 'react';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';
import {
  incrementIndex,
  decrementIndex,
  isPlayingToggle,
  setPlaying,
  setIndex
} from '../actions/players';
import formatTime from '../utils/format-time';

export class Player extends React.Component {
  state = {
    duration: undefined,
    currentTime: undefined,
    isReady: false
  };

  playlists = this.props.playlists.map(({ filename, precept }) => ({
    mp3: `https://s3-ap-southeast-1.amazonaws.com/transprayer/mp3/${filename}.mp3`,
    precept
  }));

  componentWillUnmount() {
    this.setState(() => ({ isReady: false }));
    this.props.setIndex();
    this.props.setPlaying();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.players.index !== nextProps.players.index) {
      this.setState(() => ({ isReady: false }));
    }
  }

  isPlayingToggle = () => {
    console.log(this.props.players.index)
    this.props.isPlayingToggle();
    if (!this.props.players.isPlaying) {
      this.props.handleOpenModal();
    }
  };

  onNextClick = () => {
    this.props.incrementIndex();
  };

  onPrevClick = () => {
    this.props.decrementIndex();
  };

  onEndedEvent = () => {
    if (this.props.players.index + 1 === this.props.playlists.length) {
      this.props.setIndex();
      this.props.setPlaying();
    } else {
      this.props.incrementIndex();
      this.props.setPlaying(true);
    }
  };

  onReady = () => {
    this.setState(() => ({ isReady: true }));
  };

  onProgress = state => {
    this.setState(() => ({ currentTime: state.playedSeconds }));
  };

  onDuration = duration => {
    this.setState(() => ({ duration }));
  };

  ref = player => {
    this.player = player;
  };

  render() {
    return (
      <div className="player-container">
        <div className="player">
          <div>
            <ReactPlayer
              ref={this.ref}
              playing={this.props.players.isPlaying}
              url={this.playlists[this.props.players.index].mp3}
              onEnded={this.onEndedEvent}
              onProgress={this.onProgress}
              onDuration={this.onDuration}
              onReady={this.onReady}
              width="100%"
              height="100%"
            />
            <button
              className="music-button"
              onClick={this.onPrevClick}
              disabled={this.props.players.index === 0}
            >
              <img src="/images/prev.png" />
            </button>
            <button className="music-button" onClick={this.isPlayingToggle}>
              {this.props.players.isPlaying ? (
                <img src="/images/pause.png" />
              ) : (
                <img src="/images/play.png" />
              )}
            </button>
            <button
              className="music-button"
              onClick={this.onNextClick}
              disabled={this.props.players.index === this.playlists.length - 1}
            >
              <img src="/images/next.png" />
            </button>
          </div>
          <div className="player-content">
            {this.playlists && this.state.isReady ? (
              <h3 className="player-title move-text">
                {this.playlists[this.props.players.index].precept}
              </h3>
            ) : (
              <h3 className="player-title">Loading...</h3>
            )}
            <p className="player-timer">
              {this.state.currentTime !== undefined && this.state.isReady
                ? formatTime(this.state.currentTime)
                : '0.00'}
              {' / '}
              {this.state.duration && this.state.isReady
                ? formatTime(this.state.duration)
                : '0.00'}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  players: state.players
});

const mapDispatchToProps = (dispatch, props) => ({
  incrementIndex: () => dispatch(incrementIndex()),
  decrementIndex: () => dispatch(decrementIndex()),
  isPlayingToggle: () => dispatch(isPlayingToggle()),
  setPlaying: () => dispatch(setPlaying()),
  setIndex: index => dispatch(setIndex(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
