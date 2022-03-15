/* eslint-disable import/prefer-default-export */
import { useState } from 'react';

const initialFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  phonetype: '',
  formSubmitted: false,
  success: false,
  memberNumber: ''
};

export const useFormControls = () => {
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});

  const validate = (fieldValues = values) => {
    const temp = { ...errors };

    if ('firstName' in fieldValues) {
      temp.firstName = fieldValues.firstName ? '' : 'Please enter a valid First Name';
      if (fieldValues.firstName) {
        temp.firstName = /^([a-zA-Z0-9'‘’—–-]+\s?)*$/.test(fieldValues.firstName) ? '' : 'Please enter a valid First Name';
      }
    }

    if ('lastName' in fieldValues) {
      temp.lastName = fieldValues.lastName ? '' : 'Please enter a valid Last Name';
      if (fieldValues.lastName) {
        temp.lastName = /^([a-zA-Z0-9'‘’—–-]+\s?)*$/.test(fieldValues.lastName) ? '' : 'Please enter a valid Last Name';
      }
    }

    if ('email' in fieldValues) {
      temp.email = fieldValues.email ? '' : 'Please enter a valid Email';
      if (fieldValues.email) {
        temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email) ? '' : 'Please enter a valid Email';
      }
    }

    if ('phoneNumber' in fieldValues) {
      temp.phoneNumber = fieldValues.phoneNumber ? '' : 'Please enter a valid Primary Number';
      if (fieldValues.phoneNumber) {
        temp.phoneNumber = /^[1-9]{1}\d{9}$/.test(fieldValues.phoneNumber) ? '' : 'Please enter a valid Primary Number';
      }
    }

    if ('phonetype' in fieldValues) {
      temp.phonetype = fieldValues.phonetype ? '' : 'Please choose either Mobile or Home';
    }

    if ('memberNumber' in fieldValues) {
      if (fieldValues.memberNumber) {
        temp.memberNumber = /^[a-zA-Z0-9]*$/.test(fieldValues.memberNumber) ? '' : 'Please enter a valid Member Number';
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
      && fieldValues.phoneNumber
      && fieldValues.phonetype
      && Object.values(errors).every((x) => x === '');
    return isValid;
  };
  return {
    handleInputValue,
    formIsValid,
    errors,
    validate
  };
};
