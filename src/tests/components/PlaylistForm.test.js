import React from 'react';
import { shallow } from 'enzyme';
import { PlaylistForm } from '../../components/PlaylistForm';
import transPrayers from '../fixtures/transPrayers';
import playlists from '../fixtures/playlists';

test('should render PlaylistForm correctly', () => {
  const wrapper = shallow(<PlaylistForm transPrayers={transPrayers}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render PlaylistForm with playlists data', () => {
  const wrapper = shallow(<PlaylistForm
    transPrayers={transPrayers}
    playlist={playlists[2]}
  />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<PlaylistForm transPrayers={transPrayers}/>);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  const value = 'New description';
  const wrapper = shallow(<PlaylistForm transPrayers={transPrayers}/>);
  wrapper.find('input').simulate('change', {
    target: { value }
  });
  expect(wrapper.state('description')).toBe(value)
});

test('should call onAddlists on input change', () => {
  const wrapper = shallow(<PlaylistForm transPrayers={transPrayers}/>);
  wrapper.find('Checkbox').at(0).prop('onAddLists')('123');
  expect(wrapper.state('lists').length).toBe(1);
});

test('should call onRemoveLists on input change', () => {
  const wrapper = shallow(<PlaylistForm
    transPrayers={transPrayers}
    playlist={playlists[0]}
  />);
  wrapper.find('Checkbox').at(0).prop('onRemoveLists')('คำทำวัตรเช้า');
  expect(wrapper.state('lists')).toEqual(['ตังขณิกปัจจเวกขณปาฐะ', 'บทพิจารณาสังขาร']);
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<PlaylistForm
    transPrayers={transPrayers}
    playlist={playlists[1]}
    onSubmit={onSubmitSpy}
  />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: playlists[1].description,
    lists: playlists[1].lists
  });
});

