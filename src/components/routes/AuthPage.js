import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, NavLink } from 'react-router-dom';
import SignInForm from '../auth/SignInForm';
import SignUpForm from '../auth/SignUpForm';
import { signUp, signIn, moduleName } from '../../ducks/auth';
import Loader from '../common/Loader';

class AuthPage extends Component {
  static propTypes = {
    // from connect
    signUp: PropTypes.func.isRequired,
    signIn: PropTypes.func.isRequired,
    loading: PropTypes.bool,
  };

  handleSignIn = ({ email, password }) => this.props.signIn(email, password);
  handleSignUp = ({ email, password }) => this.props.signUp(email, password);

  render() {
    const { loading } = this.props;

    return (
      <div>
        <h1>Auth page</h1>
        <NavLink to="/auth/signin" activeStyle={{ color: 'red' }}>sign in</NavLink>
        <NavLink to="/auth/signup" activeStyle={{ color: 'red' }}>sign up</NavLink>
        <Route path="/auth/signin" render={() => <SignInForm onSubmit={this.handleSignIn} />} />
        <Route path="/auth/signup" render={() => <SignUpForm onSubmit={this.handleSignUp} />} />
        { loading && <Loader /> }
      </div>
    );
  }
}

export default connect(state => ({
  loading: state[moduleName].loading,
}), {
  signUp,
  signIn,
})(AuthPage);
