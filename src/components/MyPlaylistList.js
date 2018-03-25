import React from 'react';
import { connect } from 'react-redux';
import { setIndex, setPlaying } from '../actions/players';
import MyPlaylistListItem from './MyPlaylistListItem';
import Player from './Player';
import LyricsPage from './LyricsPage';
import getPlaylistData from '../utils/get-playlist-data';

export class MyPlaylistList extends React.Component {
  onPlayByIndex = index => {
    this.props.setIndex(index);
    this.props.setPlaying(true);
  };

  render() {
    return (
      <div className="content-container-body">
        {this.props.players.isPlaying && (
          <LyricsPage
            playlists={this.props.playlists}
            index={this.props.players.index}
          />
        )}
        <div className="list-header"></div>
        {this.props.playlists.map((playlist, index) => (
          <div key={index} className="list-item">
            <MyPlaylistListItem {...playlist} />
            <button
              className="music-button"
              onClick={() => {
                this.onPlayByIndex(index);
              }}
            >
              {this.props.players.isPlaying &&
              this.props.players.index === index
                ? <img src="/images/sound-bars.png" />
                : <img src="/images/play.png" />}
            </button>
          </div>
        ))}
        <Player playlists={this.props.playlists} />
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
  setPlaying: boolean => dispatch(setPlaying(boolean))
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPlaylistList);
