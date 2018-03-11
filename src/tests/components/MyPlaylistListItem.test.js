import React from 'react';
import { shallow } from 'enzyme';
import MyPlaylistListItem from '../../components/MyPlaylistListItem';
import transPrayers from '../fixtures/transPrayers';

test('should render MyPlaylistListItem with a playlist', () => {
  const wrapper = shallow(<MyPlaylistListItem {...transPrayers[0]}/>);
  expect(wrapper).toMatchSnapshot();
});