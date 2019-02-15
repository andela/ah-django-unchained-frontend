import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { resetPost } from '../../store/modules/PasswordReset';
import { Button } from '../../components/Button';
import { InputBox } from '../../components/InputBox';
import Loader from '../../components/Loader';

export class ResetPassword extends React.Component {
  state = { email: '' };

  handleChange = e => {
    this.setState({
      email: e.target.value
    });
  };
  handleSubmit = e => {
    const { resetPost } = this.props;
    e.preventDefault();
    const email = this.state.email;
    resetPost({ email });
  };

  render() {
    return (
      <div className='container'>
        <center>
          <div className='col-md-6'>
            <form onSubmit={this.handleSubmit}>
              <div className='card'>
                <header className='card-header'>
                  <h4 className='card-title mt-2'>Forgot password?</h4>
                </header>
                <div className='card-body'>
                  <div className='form-group'>
                    <label>Email</label>
                    {this.props.response && (
                      <p style={{ color: 'green' }}>{this.props.response}</p>
                )}
                    {this.props.errors && (
                      <p style={{ color: 'red' }}>{this.props.errors[0]}</p>
                )}
                    {this.props.isFetching ? (
                      <p style={{ color: 'green' }}>
                        <Loader />
                      </p>
                ) : null}
                    <InputBox 
                      type='email'
                      name='email'
                      id='email'
                      onChange={this.handleChange}
                      placeholder='Enter email'
                      className="form-control"
                      required
                    />
                  </div>
                  <div className='form-group'>
                    <Button
                      type='submit'
                      text='submit'
                      className='btn btn-info'
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </center>        
      </div>
    );
  }
}

ResetPassword.propTypes = {
  email: PropTypes.string
};

export const mapStateToProps = state => ({
  response: state.resetReducer.response.message,
  isFetching: state.resetReducer.isFetching,
  errors: state.resetReducer.errors.email
});

export const mapDispatchToProps = dispatch => ({
  resetPost: email => dispatch(resetPost(email))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPassword);
