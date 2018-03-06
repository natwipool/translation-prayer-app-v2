import React from 'react';
import { connect } from 'react-redux';
import TransPrayerListItem from './TransPrayerListItem';

const TransPrayerList = (props) => (
  <div>
    {props.transPrayers.map((tranPrayer, index) => 
      <TransPrayerListItem 
        key={index}
        {...tranPrayer}
      />
    )}
  </div>
);

const mapStateToProps = (state) => ({
  transPrayers: state.transPrayers
});

export default connect(mapStateToProps)(TransPrayerList);