import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {mapDispatchToProps, NavBar} from './index';
import store from '../../store';

describe('The NavBar', () => {
  let componentWrapper = {};
  let props;
  let dispatch;
  let wrapperInstance;
  beforeEach(() => {
    componentWrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>
      </Provider>
    );
    props = {
      logoutUser: jest.fn(() => {
        Promise.resolve();
      })
    };
    wrapperInstance = shallow(<NavBar {...props} />).instance();
  });

  it('should match snapshot', () => {
    expect(componentWrapper).toMatchSnapshot();
  });

  it('Should dispatch when logoutuser is called', () => {
    dispatch = jest.fn(() => Promise.resolve());
    props = mapDispatchToProps(dispatch);
    props.logoutUser();
    expect(dispatch).toHaveBeenCalled();
  });

  it('should call dispatch when clearToken is called', () => {
    wrapperInstance.clearToken();
    expect(props.logoutUser).toHaveBeenCalled();
  });
});
