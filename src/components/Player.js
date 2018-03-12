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
    url: `/audio/${filename}`,
    precept
  }));

  componentWillUnmount() {
    this.props.setIndex();
    this.props.setPlaying();
  }

  isPlayingToggle = () => {
    this.props.isPlayingToggle();
  };

  onNextClick = () => {
    this.props.incrementIndex();
  };

  onPrevClick = () => {
    this.props.decrementIndex();
  };

  onEndedEvent = () => {
    this.setState(() => ({ isReady: false }));
    if ((this.props.players.index + 1) === this.props.playlists.length) {
      this.props.setIndex();
      this.props.setPlaying();
    } else {
      this.props.incrementIndex();
      this.props.setPlaying(true);
    }
  };

  onReady = () => {
    this.setState(() => ({ isReady: true }));
  }

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
      <div>
        {this.playlists && this.state.isReady ? (
          <h3>{this.playlists[this.props.players.index].precept}</h3>
        ) : (
          <h3>Loading...</h3>
        )}
        <p>
          {'Status: '}
          {this.state.currentTime !== undefined
            ? formatTime(this.state.currentTime)
            : '0.00'}
          {' / '}
          {this.state.duration ? formatTime(this.state.duration) : '0.00'}
        </p>
        <ReactPlayer
          ref={this.ref}
          playing={this.props.players.isPlaying}
          url={this.playlists[this.props.players.index].url}
          onEnded={this.onEndedEvent}
          onProgress={this.onProgress}
          onDuration={this.onDuration}
          onReady={this.onReady}
          width="100%"
          height="100%"
        />
        <button
          onClick={this.onPrevClick}
          disabled={this.props.players.index === 0}
        >
          PREV
        </button>
        <button onClick={this.isPlayingToggle}>
          {this.props.players.isPlaying ? 'PAUSE' : 'PLAY'}
        </button>
        <button
          onClick={this.onNextClick}
          disabled={this.props.players.index === this.playlists.length - 1}
        >
          NEXT
        </button>
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
  setIndex: (index) => dispatch(setIndex(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
