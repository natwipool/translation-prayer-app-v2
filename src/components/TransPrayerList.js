import React from 'react';
import { connect } from 'react-redux';
import { setIndex, setPlaying } from '../actions/players';
import TransPrayerListItem from './TransPrayerListItem';
import Player from './Player';

class TransPrayerList extends React.Component {
  constructor(props) {
    super(props);
  }
  onPlayByIndex = (index) => {
    this.props.dispatch(setIndex(index))
    this.props.dispatch(setPlaying())
  }

  render() {
    return (
      <div>
        {this.props.transPrayers.map((tranPrayer, index) => (
          <div key={index}>
            <TransPrayerListItem {...tranPrayer} />
            <button
              onClick={() => {
                this.onPlayByIndex(index);
              }}
            >
              {this.props.players.isPlaying && this.props.players.index === index ? 'PLAYING' : 'PLAY'}
            </button>
          </div>
        ))}
        <Player
          playlists={this.props.transPrayers}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  transPrayers: state.transPrayers,
  players: state.players
});

export default connect(mapStateToProps)(TransPrayerList);
