import React from 'react';
import { shallow } from 'enzyme';
import ArticlePanel from './index';

describe('ArticlePanel', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ArticlePanel />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
