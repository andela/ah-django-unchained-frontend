import React from 'react';
import { shallow } from 'enzyme';
import ProfileView  from './index.jsx';


describe('Profiles', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ProfileView />);
    });

    it('should evaluate  wrapper length to 1', () => {
        expect(wrapper.length).toBe(1);
        
    })
    
    
})