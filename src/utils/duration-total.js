export default playlists => {
  return playlists
    .map(playlist => playlist.duration)
    .reduce((sum, value) => sum + value, 0);
};
