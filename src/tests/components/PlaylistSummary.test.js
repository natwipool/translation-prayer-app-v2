import React from 'react';
import { shallow } from 'enzyme';
import { PlaylistSummary } from '../../components/PlaylistSummary';

test('should render PlaylistSummary with one playlist', () => {
  const wrapper = shallow(<PlaylistSummary
    preceptCount={1}
    durationTotal={200.2121}
  />)
  expect(wrapper).toMatchSnapshot()
});

test('should render PlaylistSummary with mutiple playlist ', () => {
  const wrapper = shallow(<PlaylistSummary
    preceptCount={27}
    durationTotal={34250.251521}
  />)
  expect(wrapper).toMatchSnapshot()
});