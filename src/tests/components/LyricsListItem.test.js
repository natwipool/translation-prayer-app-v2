import React from 'react';
import { shallow } from 'enzyme';
import LyricsListItem from '../../components/LyricsListItem';
import transPrayers from '../fixtures/transPrayers';

test('should render LyricsListItem correctly', () => {
  const wrapper = shallow(<LyricsListItem lyric={transPrayers[0].lyrics[1]}/>)
  expect(wrapper).toMatchSnapshot();
});