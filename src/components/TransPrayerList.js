import React from 'react';
import { connect } from 'react-redux';
import { setIndex, setPlaying } from '../actions/players';
import TransPrayerListItem from './TransPrayerListItem';
import Player from './Player';

export class TransPrayerList extends React.Component {
  onPlayByIndex = index => {
    this.props.setIndex(index);
    this.props.setPlaying(true);
  };

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
              {this.props.players.isPlaying &&
              this.props.players.index === index
                ? 'PLAYING'
                : 'PLAY'}
            </button>
          </div>
        ))}
        <Player playlists={this.props.transPrayers} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  transPrayers: state.transPrayers,
  players: state.players
});

const mapDiapatchToProps = (dispatch, props) => ({
  setIndex: (index) => dispatch(setIndex(index)),
  setPlaying: (boolean) => dispatch(setPlaying(boolean))
});

export default connect(mapStateToProps, mapDiapatchToProps)(TransPrayerList);
