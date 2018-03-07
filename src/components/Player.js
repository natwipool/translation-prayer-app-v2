import React from 'react';
import ReactDOM from 'react-dom';
import Audio from 'react-audioplayer';
// import ReactAudioPlayer from 'react-audio-player';

class Player extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      index: 0
    }
  }
  
  songs = this.props.transPrayers.map((transPrayer) => ({
    name: transPrayer.precept,
    src: `/audio/${transPrayer.filename}`
  }))
  
  render() {
    return (
      <Audio
        autoPlay={true}
        playlist={this.songs}
      />
    ) 
  }
}

export default Player;