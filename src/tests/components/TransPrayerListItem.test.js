import React from 'react';
import { shallow } from 'enzyme';
import TransPrayerListItem from '../../components/TransPrayerListItem';
import transPrayers from '../fixtures/transPrayers';

test('should render TransPrayerListItem with a playlist', () => {
  const wrapper = shallow(<TransPrayerListItem {...transPrayers[1]}/>);
  expect(wrapper).toMatchSnapshot();
});