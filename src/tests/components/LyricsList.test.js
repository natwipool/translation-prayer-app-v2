import React from 'react';
import { shallow } from 'enzyme';
import { LyricsList } from '../../components/LyricsList';
import transPrayers from '../fixtures/transPrayers';

test('should render LyricsList correctly', () => {
  const wrapper = shallow(<LyricsList playlist={transPrayers[0]} />)
  expect(wrapper).toMatchSnapshot();
});
