import React from 'react';
import { shallow } from 'enzyme';
import  ProfileImage from './index';


describe ('ProfileImage', () => {
    let wrapper;
    beforeEach( () => {
        const dummyProp = {
            data: {
              profile: {
                first_name: 'john',
                last_name: 'doe',
                gender: 'F',
                bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
                profile_image: 'http://res.cloudinary.com/authors/image/upload/v1550230786/cpznbg2cqjobrhzvvoan.jpg',
                updated_at: '2019-02-15'
              }
            },
            isLoad: true
          }
        wrapper  = shallow(<ProfileImage image={ dummyProp }/>)
    })

    it('should be defined', () => {
        expect(ProfileImage).toBeDefined()
    })
})