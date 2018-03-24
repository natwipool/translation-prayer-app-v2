import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const PlaylistListItem = ({ id, description }) => (
  <Link className="playlist-item" to={`/playlist/${id}`}>
    <h3 className="playlist-item__title">{description}</h3>
  </Link>
);

export default connect()(PlaylistListItem);
