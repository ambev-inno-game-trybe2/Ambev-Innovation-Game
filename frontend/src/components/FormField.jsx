import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

const FormField = ({
  labelText,
  placeholder,
  type,
  value,
  name,
  onChange,
  required,
  cols,
  rows,
  maxLength,
}) => {
  return (
    <div>
      {labelText && <Form.Label htmlFor={name}>{labelText}</Form.Label>}
      {type !== 'textarea' && (
        <Form.Control
          as="input"
          type={type}
          name={name}
          id={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
          maxLength={maxLength}
        />
      )}
      {type === 'textarea' && (
        <Form.Control
          as="textarea"
          name={name}
          id={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
          cols={cols}
          rows={rows}
          maxLength={maxLength}
        />
      )}
    </div>
  );
};

FormField.defaultProps = {
  labelText: null,
  value: '',
  placeholder: '',
  onChange: null,
  required: false,
  cols: '50',
  rows: '4',
  maxLength: '100',
};

FormField.propTypes = {
  labelText: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  cols: PropTypes.string,
  rows: PropTypes.string,
  maxLength: PropTypes.string,
  required: PropTypes.bool,
};

export default FormField;
