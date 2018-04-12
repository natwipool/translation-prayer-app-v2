import React from 'react';
import { connect } from 'react-redux';
import raf from 'raf';
import ReactHowler from 'react-howler';
import isSafari from 'is-safari';
import { ProgressBar } from 'react-bootstrap';
import currentPercent from '../utils/current-time-to-percent';
import {
  incrementIndex,
  decrementIndex,
  isPlayingToggle,
  setPlaying,
  setIndex
} from '../actions/players';
import formatTime from '../utils/format-time';

export class Player extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      duration: undefined,
      seek: 0,
      currentPercent: 0
    };

    this.playlists = this.props.playlists.map(
      ({ filename, precept, duration }) => ({
        ogg: `https://s3-ap-southeast-1.amazonaws.com/transprayer/ogg/${filename}.ogg`,
        mp3: `https://s3-ap-southeast-1.amazonaws.com/transprayer/mp3/${filename}.mp3`,
        precept,
        duration
      })
    );
  }

  componentWillMount() {
    this.props.setPlaying();
  }

  componentWillUnmount() {
    this.clearRAF();
    this.props.setIndex();
    this.props.setPlaying(false);
  }

  isPlayingToggle = () => {
    this.props.isPlayingToggle();
  };

  onPrevClick = () => {
    this.clearRAF();
    this.props.decrementIndex();
  };

  onNextClick = () => {
    this.clearRAF();
    this.props.incrementIndex();
  };

  handleOnPlay = () => {
    this.renderSeekPos();
  };

  handleOnLoad = () => {
    this.setState({
      loaded: true,
      duration: this.player.duration()
    });
  };

  onEndedEvent = () => {
    if (this.props.players.index + 1 >= this.props.playlists.length) {
      this.props.setIndex();
      this.props.setPlaying();
    } else {
      this.props.incrementIndex();
      if (!this.props.players.isPlaying) {
        this.props.setPlaying(true);
      }
    }
  };

  renderSeekPos = () => {
    this.setState({
      seek: this.player.seek(),
      currentPercent: currentPercent(this.state.seek, this.state.duration)
    });

    if (this.props.players.isPlaying) {
      this._raf = raf(this.renderSeekPos);
    }
  };

  clearRAF = () => {
    raf.cancel(this._raf);
  };

  render() {
    return (
      <div className="player-container">
        <ProgressBar bsStyle="warning" now={this.state.currentPercent} />
        <div className="player">
          <div className="group-player-button">
            <ReactHowler
              src={[
                this.playlists[this.props.players.index].ogg,
                this.playlists[this.props.players.index].mp3
              ]}
              playing={this.props.players.isPlaying}
              onPlay={this.handleOnPlay}
              onLoad={this.handleOnLoad}
              onEnd={this.onEndedEvent}
              html5={true}
              ref={ref => (this.player = ref)}
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
            {this.playlists ? (
              <h3 className="player-title">
                {this.playlists[this.props.players.index].precept}
              </h3>
            ) : (
              <h3 className="player-loading">กำลังโหลด...</h3>
            )}
            <p className="player-timer">
              {this.state.loaded ? formatTime(this.state.seek) : '0.00'}
              {' / '}
              {this.state.loaded
                ? formatTime(this.playlists[this.props.players.index].duration)
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