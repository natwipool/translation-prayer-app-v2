import React from 'react';
import { shallow } from 'enzyme';
import { PlaylistList } from '../../components/PlaylistList';
import playlists from '../fixtures/playlists';

test('should render PlaylistList with playlists', () => {
  const wrapper = shallow(<PlaylistList playlists={playlists}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render PlaylistList with no playlists', () => {
  const wrapper = shallow(<PlaylistList playlists={[]}/>);
  expect(wrapper).toMatchSnapshot();
});