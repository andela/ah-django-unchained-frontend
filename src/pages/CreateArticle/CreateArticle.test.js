import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps, mapDispatchToProps, CreateArticle } from './index';

describe('CreateArticle', () => {
  let props;
  let wrapper;
  let wrapperInstance;

  beforeEach(() => {
    props = {
      isFetching: false,
      errors: {},
      isSuccesfull: false,
      postArticle: jest.fn(() => {
        Promise.resolve();
      }), 
      uploadImage: jest.fn(() => {
        Promise.resolve();
      })
    };
    wrapper = shallow(<CreateArticle {...props} />);
    wrapperInstance = wrapper.instance();
  });

  it('should render the create article page component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should change the state when calling onChange handler', () => {
    const event = {
      target: {
        name: 'title',
        value: 'kahara'
      }
    };
    wrapperInstance.handleChange(event);
    expect(wrapperInstance.state.title).toEqual(event.target.value);
  });

  it('should initiate postArticle action on calling handleSubmit', () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        reset: jest.fn()
      }
    };
    const state = {
      title: 'Test',
      description: 'This is fake state',
      body: 'This is fake state',
      tagList: ['fake', 'state'], 
      images: 'https://cdn.pixabay.com/photo/2013/04/06/11/50/image-editing-101040_960_720.jpg'
    };
    wrapperInstance.setState(state);
    wrapperInstance.handleSubmit(event);

    expect(props.postArticle).toHaveBeenCalledWith(state);
  });
  
  it('should change the state when calling handleTagsChange', () => {
    const event = {
      target: {
        name: 'tagList',
        value: 'music'
      }
    };
    wrapperInstance.handleTagsChange(event);
    expect(wrapperInstance.state.tagList[0]).toEqual(event.target.value);
  });

  it('should change the state when calling handleEditorChange', () => {
    const event = {
      editor: {
        getData: jest.fn(),
      },
      target: {
        value: undefined
      }
    };
    wrapperInstance.handleEditorChange(event);
    expect(wrapperInstance.state.body).toEqual(event.target.value);
  });

  it('should change the state when calling handleImageUpload', () => {
    const event = {
      target: {
        files: ['https://cdn.pixabay.com/photo/2013/04/06/11/50/image-editing-101040_960_720.jpg'],
      }
    };
    const state = {
      images: 'https://cdn.pixabay.com/photo/2013/04/06/11/50/image-editing-101040_960_720.jpg'
    };
    wrapperInstance.setState(state);
    wrapperInstance.handleImageUpload(event);
    expect(props.uploadImage).toHaveBeenCalledWith(event.target.files[0]);
  });

  describe('The mapStateToProps', () => {
    const state = {
      postArticleReducer: {
        isFetching: false,
        errors: {},
        isSuccesfull: true
      },
      imageUploadReducer: {
        isFetching: false,
        errors: {},
        url: ''
      }
    };
    const props = mapStateToProps(state);
    expect(props).toEqual(state.postArticleReducer, state.imageUploadReducer);
  });

  describe('The mapDispatchToProps', () => {
    let dispatch;
    let props;

    beforeEach(() => {
      dispatch = jest.fn(() => Promise.resolve());
      props = mapDispatchToProps(dispatch);
    });

    it('should dispatch postArticle', () => {
      props.postArticle();
      expect(dispatch).toHaveBeenCalled();
    });

    it('should dispatch uploadImage', () => {
      props.uploadImage();
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
