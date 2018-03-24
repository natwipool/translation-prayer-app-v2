import React from 'react';

const TransPrayerListItem = ({ precept, category }) => (
  <div>
    <h3 className="list-item__title">{precept}</h3>
    <span className="list-item__sub-title">{category}</span>
  </div>
)

export default TransPrayerListItem;