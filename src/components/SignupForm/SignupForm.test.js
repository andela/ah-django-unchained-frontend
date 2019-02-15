import React from 'react';
import { shallow } from 'enzyme';
import SignupForm from './index';

describe('SignupForm', () => {
    it('should render the signup form', () => {
        const wrapper = shallow(<SignupForm />);
        expect(wrapper).toMatchSnapshot();
    });
});
