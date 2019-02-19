import React from 'react';
import { shallow } from 'enzyme';
import Home from './index';

describe('HomePage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
