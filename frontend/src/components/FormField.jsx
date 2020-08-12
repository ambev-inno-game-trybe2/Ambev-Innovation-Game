import React from 'react';
import PropTypes from 'prop-types';

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
  maxLength
}) => {
  return (
    <div>
      {labelText && <label htmlFor={name}>{labelText}</label>}
      {type !== 'textarea' && (
        <input
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
        <textarea
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
  cols: "50",
  rows: "4",
  maxLength: "100",
};

FormField.propTypes = {
  labelText: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  cols: PropTypes.string,
  rows: PropTypes.string,
  maxLength: PropTypes.string,
  required: PropTypes.bool,
};

export default FormField;
