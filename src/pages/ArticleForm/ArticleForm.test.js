import React from 'react';
import { shallow } from 'enzyme';
import { ArticleForm } from '.';

describe('ArticleForm', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      match: {
        params: {
          article: 'update'
        }
      },
      getSingleArticle: jest.fn( () => 
        Promise.resolve()
      )
    };
  wrapper = shallow(<ArticleForm {...props} />);
  });

  it('should render the update article page', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
