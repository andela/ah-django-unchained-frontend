import React from 'react';
import { mount } from 'enzyme';
import { UpdateArticle } from './index';

describe('UpdateArticle', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<UpdateArticle />);
  });

  it('should render the update article page', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
