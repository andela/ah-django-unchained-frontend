import React from 'react';
import { shallow } from 'enzyme';
import ArticleDetail from './index';

describe('ArticleDetail', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ArticleDetail />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
