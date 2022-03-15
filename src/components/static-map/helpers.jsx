/* eslint-disable consistent-return */
/* eslint-disable default-case */
/* eslint-disable no-shadow */
/* eslint-disable no-unreachable */
/* eslint-disable no-use-before-define */

/**
 * parseGeoCodeResponse()
 * @param {Object} data
 * @param {String} selectedOption
 * @returns {Object}
 */

const replaceAll = (string, match) => {
  const regExp = new RegExp(match, 'g');
  return string.replace(regExp, '');
};

export const parseGeoCodeResponse = (data, selectedOption) => {
  let city = findInObject(data.address_components, 'locality');
  const zip = findInObject(data.address_components, 'postal_code');
  const state = findInObject(data.address_components, 'administrative_area_level_1');
  const stateLongName = findInObject(data.address_components, 'administrative_area_level_1', 'long_name');

  const country = 'USA';
  const addressLine = selectedOption;
  let address = replaceAll(addressLine, `${city}`);
  if (!city) {
    address = replaceAll(address, `${stateLongName}`);
  }
  address = replaceAll(address, `${state}`);
  address = replaceAll(address, `${country}`)?.trim();
  address = replaceAll(address, `${zip}`)?.trim();
  const temp = address.split(',').filter((x) => x.trim()).join(',');
  if (!city && temp) {
    city = stateLongName;
  }
  return {
    city, state, zip, address: temp, selectedOption
  };
};

export const findInObject = (data, key, responseType) => {
  const type = responseType || 'short_name';
  let found = data.find((item) => item.types.includes(key));
  found = found ? found[type] : '';
  return found;
};

export const getDay = () => {
  const now = new Date();
  const day = (`0${now.getDate()}`).slice(-2);
  const month = (`0${now.getMonth() + 1}`).slice(-2);
  const year = now.getFullYear();

  return { year, month, day };
};

export const getFormatedDate = (date) => {
  const day = (`0${date.getDate()}`).slice(-2);
  const month = (`0${date.getMonth() + 1}`).slice(-2);
  const year = date.getFullYear();

  return { year, month, day };
};

export const focusOnRef = (itemRef) => {
  itemRef.current.focus();
};
