import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const Player = (props) => {
  console.log(props)
  return (
    <div>
      <ReactAudioPlayer
        src={`/audio/${props.transPrayers[0].filename}`}
        controls
      />
    </div>
  ) 
}

export default Player;