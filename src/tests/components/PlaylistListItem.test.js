import React from 'react';
import { shallow } from 'enzyme';
import { PlaylistListItem } from '../../components/PlaylistListItem';
import playlists from '../fixtures/playlists';

test('should render PlaylistListItem with a playlist', () => {
  const wrapper = shallow(<PlaylistListItem {...playlists[0]}/>);
  expect(wrapper).toMatchSnapshot();
});