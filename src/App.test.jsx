import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('App renders', () => {
  const component = shallow((
    <App />
  ));

  expect(component.find('div').text()).toEqual('React boilerplate!');
});
