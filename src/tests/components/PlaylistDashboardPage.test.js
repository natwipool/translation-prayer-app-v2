import React from 'react';
import { shallow } from 'enzyme';
import PlaylistDashboardPage from '../../components/PlaylistDashboardPage';

test('should render PlaylistDashboardPage correctly', () => {
  const wrapper = shallow(<PlaylistDashboardPage />)
  expect(wrapper).toMatchSnapshot();
});