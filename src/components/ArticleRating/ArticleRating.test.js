import React from 'react';
import { shallow } from 'enzyme';
import ArticleRating, { AverageRating } from './index';

describe('ArticleRating', () => {
  it('should render the ArticleRating component', () => {
    const wrapper = shallow(<ArticleRating />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the AverageRating component', () => {
    const wrapper = shallow(<AverageRating />);
    expect(wrapper).toMatchSnapshot();
  });
});
