import React from 'react';

const LyricsListItem = ({ lyric }) => (
  <div  className="lyric__text">
    {lyric.indexOf('(translation)') < 0 ? (
      <p className="lyric-pali__text">{lyric}</p>
    ): (
      <p className="lyric-translation__text">{lyric.replace('(translation)', '')}</p>
    )}
  </div>
)

export default LyricsListItem;
