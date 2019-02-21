import React from 'react';
import { shallow } from 'enzyme';
import {TextArea} from '.';

describe('TextArea', () => {

  it('should be defined', () => {
    expect(TextArea).toBeDefined();
  });

  it('should render correctly', () => {
    const tree = shallow(
      <TextArea
        className='form-control'
        name='textarea'
        id='textarea'
        row='12'
        placeholder='tell your story'
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
