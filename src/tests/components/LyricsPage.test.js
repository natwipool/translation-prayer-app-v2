import React from 'react';
import { shallow } from 'enzyme';
import LyricsPage from '../../components/LyricsPage';
import transPrayers from '../fixtures/transPrayers';

test('should render LyricsPage correctly', () => {
  const wrapper = shallow(<LyricsPage
    playlists={transPrayers}
    index={0}
  />)
  expect(wrapper).toMatchSnapshot();
});