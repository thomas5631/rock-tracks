import React from 'react';
import { shallow } from 'enzyme';
import Home from '.';

describe('<Home />', () => {
  let component;
  beforeAll(() => {
    component = shallow(
      <Home />,
    );
  });

  test('has a title containing `Home`', () => {
    expect(component.find('h1').text()).toEqual('Home');
  });
});
