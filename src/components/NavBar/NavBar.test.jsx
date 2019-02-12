import React from 'react';
import { mount } from 'enzyme';
import NavBar from './index';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../../store';

describe("The NavBar", () => {
  let componentWrapper = {};

  beforeEach(() => {
    componentWrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>
      </Provider>
    );
  });

  it('should match snapshot', () => {
    expect(componentWrapper).toMatchSnapshot();
  });

  it('test if menu button expands the menu', () => {
    componentWrapper.find(".navbar-toggler").simulate("click");
    expect(
      componentWrapper.find(".navbar-collapse").hasClass("collapsing")
    ).toBe(true);
  });
});
