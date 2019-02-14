import React from 'react';
import { shallow } from 'enzyme';
import ProfileView  from './index.jsx';


describe('Profiles', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ProfileView />);
    });

    it('should be difined', () => {
        expect(ProfileView).toBeDefined();
        
    })
    
    
})