import { useState } from 'react';

export default function useForm(initialState) {
  const [values, setValues] = useState(initialState);

  const setValue = (key, value) => {
    setValues({
      ...values,
      [key]: value,
    });
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValue(name, value);
  }

  const clearForm = () => {
    setValues(initialState);
  }

  return {
    values,
    clearForm,
    handleChange,
  };
}
