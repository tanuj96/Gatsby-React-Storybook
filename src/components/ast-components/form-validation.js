/* eslint-disable import/prefer-default-export */
import { useState } from 'react';

const initialFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  primaryNumber: '',
  formSubmitted: false,
  success: false
};

export const useFormControls = () => {
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});

  const validate = (fieldValues = values) => {
    const temp = { ...errors };

    if ('firstName' in fieldValues) { temp.firstName = fieldValues.firstName ? '' : 'Please enter a valid First Name'; }

    if ('lastName' in fieldValues) { temp.lastName = fieldValues.lastName ? '' : 'Please enter a valid Last Name'; }

    if ('primaryNumber' in fieldValues) { temp.primaryNumber = fieldValues.primaryNumber ? '' : 'Please enter a valid Primary Number'; }

    if ('email' in fieldValues) {
      temp.email = fieldValues.email ? '' : 'Please enter a valid Email';
      if (fieldValues.email) {
        temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
          ? ''
          : 'Email is not valid.';
      }
    }

    setErrors({
      ...temp
    });
  };
  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    validate({ [name]: value });
  };

  const formIsValid = (fieldValues = values) => {
    const isValid = fieldValues.firstName
      && fieldValues.email
      && fieldValues.lastName
      && fieldValues.primaryNumber
      && Object.values(errors).every((x) => x === '');

    return isValid;
  };
  return {
    handleInputValue,
    formIsValid,
    errors
  };
};
