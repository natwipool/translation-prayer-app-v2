import React from 'react';
import { connect } from 'react-redux';
import { setIndex, setPlaying } from '../actions/players';
import MyPlaylistListItem from './MyPlaylistListItem';
import Player from './Player';
import getPlaylistData from '../utils/getPlaylistData';

class MyPlaylistList extends React.Component {

  onPlayByIndex = (index) => {
    this.props.dispatch(setIndex(index))
    this.props.dispatch(setPlaying(true))
  }

  render() {
    return (
      <div>
        {this.props.playlists.map((playlist, index) => 
          <div key={index}>
            <MyPlaylistListItem 
              {...playlist}
            />
            <button
                onClick={() => {
                  this.onPlayByIndex(index);
                }}
              >
                {this.props.players.isPlaying && this.props.players.index === index ? 'PLAYING' : 'PLAY'}
              </button>
          </div>
        )}
        <Player
          playlists={this.props.playlists}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  playlists: getPlaylistData(state.transPrayers, props.lists),
  players: state.players
});

export default connect(mapStateToProps)(MyPlaylistList);