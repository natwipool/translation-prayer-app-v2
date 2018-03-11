import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from '../../components/Checkbox';
import transPrayers from '../fixtures/transPrayers';

test('should render Checkbox correctly', () => {
  const wrapper = shallow(<Checkbox {...transPrayers[0]} lists={[]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should call onAddLists with value if input check changed', () => {
  const onAddListsSpy = jest.fn();
  const value = transPrayers[0].precept;
  const wrapper = shallow(<Checkbox
    {...transPrayers[0]}
    lists={[]}
    onAddLists={onAddListsSpy}
  />);
  wrapper.find('input').simulate('change', {
    target: {
      checked: true,
      value,
    }
  });
  expect(onAddListsSpy).toHaveBeenLastCalledWith(value);
});

test('should call onRemoveLists with value if input uncheck changed', () => {
  const onRemoveListsSpy = jest.fn();
  const value = transPrayers[0].precept;
  const wrapper = shallow(<Checkbox
    {...transPrayers[0]}
    lists={[]}
    onRemoveLists={onRemoveListsSpy}
  />);
  wrapper.find('input').simulate('change', {
    target: {
      checked: false,
      value,
    }
  });
  expect(onRemoveListsSpy).toHaveBeenLastCalledWith(value);
});