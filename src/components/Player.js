import React from 'react';
import ReactPlayer from 'react-player';

class Player extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      index: 0
    };
  }

  onTogglePlaying = () => {
    this.setState(prevState => ({ isPlaying: !prevState.isPlaying }));
  };

  onNextClick = () => {
    this.setState(prevState => ({ index: prevState.index + 1 }));
  };

  onPrevClick = () => {
    this.setState(prevState => ({ index: prevState.index - 1 }));
  };

  onEndedHandle = () => {
    this.setState(prevState => ({
      isPlaying: true,
      index: prevState.index + 1 
    }));
  }

  playlists = this.props.playlists.map(({ filename, precept }) => ({
    url: `/audio/${filename}`,
    precept
  }));

  render() {
    return (
      <div>
        {this.playlists && <h3>{this.playlists[this.state.index].precept}</h3>}
        <ReactPlayer
          playing={this.state.isPlaying}
          url={this.playlists[this.state.index].url}
          onEnded={this.onEndedHandle}
          height="10px"
        />
        <button
          onClick={this.onPrevClick}
          disabled={this.state.index === 0}
        >
          PREV
        </button>
        <button onClick={this.onTogglePlaying}>
          {this.state.isPlaying ? 'PAUSE' : 'PLAY'}
        </button>
        <button 
          onClick={this.onNextClick}
          disabled={this.state.index === this.playlists.length - 1}
        >
          NEXT
        </button>
      </div>
    );
  }
}

export default Player;
