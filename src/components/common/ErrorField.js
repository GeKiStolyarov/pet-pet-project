import React from 'react';
import PropTypes from 'prop-types';

function ErrorField(props) {
  const { input, type, meta: { error, touched } } = props;
  const errorText = touched && error && <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div>
      <label htmlFor={input.name}>
        { input.name }: <abbr title="required">*</abbr>
      </label>
      <input id={input.name} {...input} type={type} />
      {errorText}
    </div>
  );
}

ErrorField.propTypes = {
  input: PropTypes.object,
  type: PropTypes.string,
  meta: PropTypes.object,
};

export default ErrorField;
