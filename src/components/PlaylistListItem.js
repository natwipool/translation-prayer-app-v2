import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const PlaylistListItem = ({ id, description }) => (
  <div>
    <Link to={`/playlist/${id}`}>
      <h3>{description}</h3>
    </Link>
  </div>
)

export default connect()(PlaylistListItem);