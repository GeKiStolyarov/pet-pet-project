import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

class SignInForm extends Component {
  static propTypes = {
    // from redux-form
    handleSubmit: PropTypes.func.isRequired,
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">
              E-mail: <abbr title="required">*</abbr>
            </label>
            <Field id="email" name="email" component="input" />
          </div>
          <div>
            <label htmlFor="password">
              Password: <abbr title="required">*</abbr>
            </label>
            <Field id="password" name="password" component="input" type="password" />
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'auth',
})(SignInForm);
