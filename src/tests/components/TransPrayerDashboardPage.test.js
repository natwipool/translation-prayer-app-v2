import React from 'react';
import { shallow } from 'enzyme';
import TransPrayerDashboardPage from '../../components/TransPrayerDashboardPage';

test('should render TransPrayerDashboardPage correctly', () => {
  const wrapper = shallow(<TransPrayerDashboardPage />)
  expect(wrapper).toMatchSnapshot();
});