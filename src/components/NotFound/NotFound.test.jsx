import React from 'react';
import {shallow} from 'enzyme';
import {NotFound} from './index';

describe('NotFound', () =>{
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NotFound />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
