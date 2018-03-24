import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<Header isAuthenticated={false} startLogin={startLogin}/>);
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
});

test('should call startLogout on button click', () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header isAuthenticated={true} startLogout={startLogout}/>);
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});

