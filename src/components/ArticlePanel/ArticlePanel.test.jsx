import React from 'react';
import { shallow } from 'enzyme';
import ArticlePanel from './index';

describe('ArticlePanel', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      article: [
        {
          id: 1,
          title: 'title',
          slug: 'slug',
          description: ' desc',
          body: 'body'
        },
        {
          id: 2,
          title: 'title2',
          slug: 'slug2',
          description: ' desc2',
          body: 'body2'
        }
      ],
      getallArticles: jest.fn()
    };
    wrapper = shallow(<ArticlePanel {...props} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
