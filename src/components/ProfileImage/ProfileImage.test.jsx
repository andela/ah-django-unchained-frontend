import React from 'react';
import { shallow } from 'enzyme';
import { ProfileImage } from './index';

describe('ProfileImage', () => {
  let wrapperTrue;
  let wrapperFalse;
  let wrapperInstance;
  let dummyPropTrue;
  beforeEach(() => {
    dummyPropTrue = {
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
      isLoad: true,
      updateProfileImage: jest.fn(() => {
        Promise.resolve();
      }),
      match: {
        params: {
          username: 'username'
        }
      }
    };

    const dummyPropFalse = {
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
      isLoad: false
    };
    wrapperTrue = shallow(<ProfileImage image={dummyPropTrue} updateProfileImage={dummyPropTrue.updateProfileImage} />);
    wrapperFalse = shallow(<ProfileImage image={dummyPropFalse} />);
    wrapperInstance = wrapperTrue.instance();
  });

  it('should match snapshot if isLoad true', () => {
    expect(wrapperTrue).toMatchSnapshot();
  });

  it('should match snapshot if isload is false', () => {
    expect(wrapperFalse).toMatchSnapshot();
  });

  it('should call updateProfileImage on calling fileSelectHandler', () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        reset: jest.fn()
      }
    };
    const state = {
      profile_image: 'some image url'
    };
    wrapperInstance.setState(state);
    wrapperInstance.fileSelectHandler(event);
    expect(dummyPropTrue.updateProfileImage).toHaveBeenCalled();
  });
});
