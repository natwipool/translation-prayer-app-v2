import React from 'react';
import { connect } from 'react-redux';
import TransPrayerListItem from './TransPrayerListItem';
import Player from './Player';

class TransPrayerList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0
    }
  }
  onPlay = (index) => {
    this.setState(() => ({ index }))
  }
  render() {
    return (
      <div>
        {this.props.transPrayers.map((tranPrayer, index) => (
          <div key={index}>
            <TransPrayerListItem {...tranPrayer} />
            <button
              onClick={() => {
                this.onPlay(index);
              }}
            >
              PLAY
            </button>
          </div>
        ))}
        <Player
          index={this.state.index}
          transPrayers={this.props.transPrayers}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  transPrayers: state.transPrayers
});

export default connect(mapStateToProps)(TransPrayerList);
