import React from 'react';
import LyricsListItem from './LyricsListItem';

const LyricsList = (props) => (
  <div>
    {props.playlist.lyrics.map((lyric, index) => 
      <LyricsListItem
        key={index}
        lyric={lyric}
      />
    )}
  </div>
);

export default LyricsList;