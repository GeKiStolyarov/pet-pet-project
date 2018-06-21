import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { moduleName } from '../../ducks/auth';
import UnAuthorized from './UnAuthorized';

class ProtectedRoute extends Component {
  static propTypes = {
    component: PropTypes.element.isRequired,
    // from connect
    authorized: PropTypes.bool.isRequired,
  };

  renderProtected = (routeProps) => {
    const { component: ProtectedComponent, authorized } = this.props;
    return authorized ? <ProtectedComponent {...routeProps} /> : <UnAuthorized />;
  }

  render() {
    const { component, ...rest } = this.props;
    return <Route {...rest} render={this.renderProtected} />;
  }
}

export default connect(state => ({
  authorized: !!state[moduleName].user,
}))(ProtectedRoute);
