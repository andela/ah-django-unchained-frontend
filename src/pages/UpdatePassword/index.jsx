import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { updatePassword } from '../../store/modules/UpdatePassword';
import { Button } from '../../components/Button';
import { InputBox } from '../../components/InputBox';
import Loader from '../../components/Loader';

export class UpdatePassword extends React.Component {
  state = {
    password: '',
    confirm_password: '',
    passmissMatch: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    const { password, confirm_password } = this.state;
    if (password !== confirm_password) {
      this.setState({
        passmissMatch: 'Passwords do not match'
      });
    } else {
      const token = this.props.match.params.token;
      e.preventDefault();
      const { updatePassword } = this.props;
      const { password, confirm_password } = this.state;
      updatePassword({ newpassword: { password, confirm_password }, token });
    }
  };

  render() {
    return (
      <div className="container">
        <center>
          <div className='col-md-6'>
            <form onSubmit={this.handleSubmit}>
              <div className="card">
                <header className="card-header">
                  <h4 className="card-title mt-2">Change Password</h4>
                </header>
                <article className="card-body">
                  <div className="form-group">
                    <label>
                      <b>New Password</b>
                    </label>
                    <InputBox
                      type="password"
                      placeholder="Enter Password"
                      onChange={this.handleChange}
                      className="form-control"
                      name="password"
                      required
                    />
                  </div>
                  <label>
                    <b>Confirm Password</b>
                  </label>
                  <div className="form-group">
                    <InputBox
                      type="password"
                      placeholder="Confirm Password"
                      className="form-control"
                      onChange={this.handleChange}
                      name="confirm_password"
                      required
                    />
                  </div>
                  {this.props.isFetching ? (
                    <p style={{ color: 'green' }}>
                      <p>
                        <Loader />
                      </p>
                    </p>
              ) : null}
                  {this.props.response && (
                  <div>
                    <p style={{ color: 'green' }}>{this.props.response}</p>
                    <Redirect to='/login' />
                  </div>
              )}
                  {this.props.errors && (
                  <p style={{ color: 'red' }}>{this.props.errors.data}</p>
              )}
                  {this.data && <p style={{ color: 'green' }}>{this.data}</p>}
                  <label style={{ color: 'red' }}>{this.state.passmissMatch}</label>
                  <div className="form-group">
                    <div className="form-group">
                      <Button
                        type="submit"
                        className="btn btn-info btn-block"
                        text="submit"
                      />
                    </div>
                  </div>
                </article>
              </div>
            </form>
          </div>
        </center>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  errors: state.updatepasswordReducer.errors.response,
  response: state.updatepasswordReducer.response,
  isFetching: state.updatepasswordReducer.isFetching
});

export const mapDispatchToProps = dispatch => ({
  updatePassword: newpassword => dispatch(updatePassword(newpassword))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdatePassword);
