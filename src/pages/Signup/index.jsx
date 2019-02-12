import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignupForm from '../../components/Signup'

class SignUp extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        cpassword: ''
    };

    pageLoading = {
        loading: false, 
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {
        const { error, success } = this.props;
        // if (success.Message) {
        //   successMessage(success.Message);
        //   return <Redirect to='/' />;
        // }

    return (
      <div className='container' id='loginContainer'>
        {/* {this.pageLoading.loading === true ? <Loader /> : null} */}
        <SignupForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        //   messages={messages}
          error={error}
        />
      </div>
    );

 }
}

export default SignUp;
