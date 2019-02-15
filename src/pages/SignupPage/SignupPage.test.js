import React from 'react';
import { shallow } from 'enzyme';
import Signup from '.';

describe('Routes', () => {
    it('should render the signup route', () => {
      const wrapper = shallow(<Signup />);
      expect(wrapper.length).toBe(1);
    });
  });
