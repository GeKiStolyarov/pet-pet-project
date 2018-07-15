import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Link, withRouter } from 'react-router-dom';
import AdminPage from './routes/AdminPage';
import AuthPage from './routes/AuthPage';
import PersonPage from './routes/PersonPage';
import EventsPage from './routes/EventsPage';
import ProtectedRoute from './common/ProtectedRoute';
import { moduleName, signOut } from '../ducks/auth';

class Root extends Component {
  static propTypes = {
    // from connect
    signOut: PropTypes.func.isRequired,
    signedIn: PropTypes.bool.isRequired,
  };

  render() {
    const { signOut, signedIn } = this.props;
    const btn = signedIn
      ? <button onClick={signOut}>Sign out</button>
      : <Link to="/auth/signin">Sign In</Link>;

    return (
      <div>
        {btn}
        <ProtectedRoute path="/admin" component={AdminPage} />
        <ProtectedRoute path="/people" component={PersonPage} />
        <ProtectedRoute path="/events" component={EventsPage} />
        <Route path="/auth" component={AuthPage} />
      </div>
    );
  }
}

export default withRouter(connect(state => ({
  signedIn: !!state[moduleName].user,
}), { signOut })(Root));
