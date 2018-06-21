import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, NavLink } from 'react-router-dom';
import SignInForm from '../auth/SignInForm';
import SignUpForm from '../auth/SignUpForm';
import { signUp, moduleName } from '../../ducks/auth';
import Loader from '../Loader';

class AuthPage extends Component {
  static propTypes = {
    // from connect
    signUp: PropTypes.func.isRequired,
    loading: PropTypes.bool,
  };

  handleSignIn = values => console.log('--- Sign In ---', values);
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
}), { signUp })(AuthPage);
