import React from 'react';
import { shallow } from 'enzyme';
import { LikeDislikeArticle } from './index';

describe('LikeDislikeArticle', () => {
  let props;
  beforeEach(() => {
    props = {
      article: {
        likes_count: 2
      }
    };
  });
  it('should render the likedislike article buttons', () => {
    const wrapper = shallow(<LikeDislikeArticle {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
