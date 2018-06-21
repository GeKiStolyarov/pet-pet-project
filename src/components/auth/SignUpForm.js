import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as emailValidator from 'email-validator';
import { reduxForm, Field } from 'redux-form';
import ErrorField from '../common/ErrorField';

class SignUpForm extends Component {
  static propTypes = {
    // from redux-form
    handleSubmit: PropTypes.func.isRequired,
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <Field id="email" name="email" component={ErrorField} />
          <Field id="password" name="password" component={ErrorField} type="password" />
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
}

const validate = ({ email, password }) => {
  const errors = {};

  // e-mail validate
  if (!email) errors.email = 'email is required';
  else if (!emailValidator.validate(email)) errors.email = 'invalid email';

  // password validate
  if (!password) errors.password = 'password is required';
  else if (password.length < 8) errors.password = 'to short';

  return errors;
};

export default reduxForm({
  form: 'auth',
  validate,
})(SignUpForm);
