import React from 'react';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';
import {
  incrementIndex,
  decrementIndex,
  isPlayingToggle,
  setPlaying
} from '../actions/players';
import formatTime from '../utils/formatTime';

class Player extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: undefined,
      currentTime: undefined
    };
  }

  playlists = this.props.playlists.map(({ filename, precept }) => ({
    url: `/audio/${filename}`,
    precept
  }));

  onTogglePlaying = () => {
    this.props.dispatch(isPlayingToggle());
  };

  onNextClick = () => {
    this.props.dispatch(incrementIndex());
  };

  onPrevClick = () => {
    this.props.dispatch(decrementIndex());
  };

  onEndedEvent = () => {
    this.props.dispatch(incrementIndex());
    this.props.dispatch(setPlaying());
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
      <div>
        {this.playlists && (
          <h3>{this.playlists[this.props.players.index].precept}</h3>
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
          width="100%"
          height="100%"
        />
        <button
          onClick={this.onPrevClick}
          disabled={this.props.players.index === 0}
        >
          PREV
        </button>
        <button onClick={this.onTogglePlaying}>
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

export default connect(mapStateToProps)(Player);
