import React from 'react';
import { mount } from 'enzyme';
import { ArticleForm } from '.';

describe('ArticleForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<ArticleForm />);
  });

  it('should render the update article page', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
