import React, { Component } from "react";
import { connect } from "react-redux";
import SignupForm from "../../components/Signup";
import { signupAsync } from "../../store/modules/signup/index";

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    cpassword: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { signupAsync } = this.props;
    const userData = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };
    signupAsync(userData);
  };

  render() {
    console.log(this.props)
    return (
      <div className="jumbotron" id="loginContainer">
        <SignupForm
          onSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.isFetching,
  register: state.response,
  errors: state.errors
});


const mapDispatchToProps = dispatch => ({
  signupAsync: user => dispatch(signupAsync(user)),
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
