import React from 'react';
import { connect } from 'react-redux';

export const PlayerOptions = props => (
  <div className="options-container">
    

    <div className="onoffswitch">
      <input
        type="checkbox"
        name="onoffswitch"
        className="onoffswitch-checkbox"
        id="close-player"
        onChange={props.onClosePlayer}
      />
      <label className="onoffswitch-label" htmlFor="close-player">
        <span className="onoffswitch-inner" />
        <span className="onoffswitch-switch" />
        
      </label>
      </div>
      <p>เปิด/ปิด เสียงสวดมนต์</p>
  </div>
);

export default PlayerOptions;
