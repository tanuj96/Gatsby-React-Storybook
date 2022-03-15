/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-use-before-define */
import React, { useMemo, useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import LocationIcon from '@material-ui/icons/Room';
import {
  Box, CircularProgress, Grid, TextField, makeStyles
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import useScript from './use-script';
import useOutsideClick from './use-click-outside';
import { parseGeoCodeResponse } from './helpers';

const useStyles = makeStyles(() => ({
  autoComplete: {
    '& ul': {
      padding: '0px!important',
      '& li': {
        padding: '0px!important',
        '& .option': {
          padding: '10px'
        }
      }
    }
  }
}));

const EMPTY_SEARCH = 'EMPTY_SEARCH';

const CmpPlaceSearch = (props) => {
  const {
    id, label, selected, emptySearch, value, cls, fromBuy, fromSell, selectedLocationFromDropdown
  } = props;
  const [results, setResults] = useState(value ? [{ description: value }] : []);
  const [error, setError] = useState('');
  const [selectedValue, setSelectedValue] = useState(value);
  const [currentOption, setCurrentOption] = useState('');
  const [loaded] = useScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyD2qekr3ncyEGBD36Z-AOSmkbjwj3juhU4&libraries=places');

  let map;
  const classes = useStyles();

  const checkValidation = (geoCoderResult) => {
    let flag = true;

    if (fromBuy) {
      if (geoCoderResult.city && geoCoderResult.state) {
        setError('');
      } else {
        setError('Please select address with state and city');
        flag = false;
      }
    } else if (fromSell) {
      if (geoCoderResult.city && geoCoderResult.address && geoCoderResult.state) {
        setError('');
      } else {
        setError('Please enter a full address. Example: 123 Main Street, Boston, MA, 02129');
        flag = false;
      }
    }
    if (flag) {
      selected(geoCoderResult);
      setSelectedValue(geoCoderResult.selectedOption);
      selectedLocationFromDropdown(geoCoderResult);
    } else {
      selectedLocationFromDropdown('');
      setSelectedValue('');
    }
  };

  const getPalce = (value) => {
    if (!loaded) return;
    if (value) {
      const service = new google.maps.places.AutocompleteService(map);
      const request = {
        input: value,
        componentRestrictions: { country: ['us'] }
      };

      // props.selectedLocationFromDropdown(value);

      service.getPlacePredictions(request, (predictions, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          setResults([...predictions.slice(0, 5)]);
        } else {
          setResults([]);
        }
      });
    } else {
      setSelectedValue('');
      props.selectedLocationFromDropdown('');
    }
  };

  const selectItem = (selectedOption) => {
    let geoCoderResult = {};
    const geoCoder = new google.maps.Geocoder();

    geoCoder.geocode({ address: selectedOption }, (results, status) => {
      if (status == 'OK') {
        const lat = results[0].geometry.location.lat();
        const lng = results[0].geometry.location.lng();

        geoCoderResult = parseGeoCodeResponse(results[0], selectedOption);
        const addressSelected = {
          address: selectedOption,
          lat,
          lng
        };

        checkValidation(geoCoderResult);
      }
    });
  };

  const handleAddressChange = (event, newValue) => {
    if (typeof newValue === 'string') {
      getPalce(newValue);
    } else if (newValue && newValue.inputValue) {
      // Create a new value from the user input
      getPalce(newValue.inputValue);
    } else {
      getPalce(event.target.value);
    }
  };

  const onBlur = (e) => {
    if (selectedValue == '') {
      setError('Please enter a full address. Example: 123 Main Street, Boston, MA, 02129');
    }
  };

  const handleChange = (e, option, reason) => {
    if (reason == 'keyboard') {
      if ((e.keyCode === 38 || e.keyCode == 40) && option.description) {
        setCurrentOption(option.description);
      }
    }
  };

  const helperText = useMemo(() => (error || ''), [error]);

  return (
    <Autocomplete
      id="google-map-demo"
      fullWidth
      getOptionLabel={(option) => (typeof option === 'string' ? option : option.description)}
      defaultValue={{ description: value }}
      disabled={!loaded}
      options={results}
      clearOnBlur={false}
      classes={{ popper: classes.autoComplete }}
      autoSelect
      onInputChange={handleAddressChange}
      required
      onBlur={onBlur}
      noOptionsText="No Results Found"
      renderInput={(params) => (
        <TextField
          variant="outlined"
          onBlur={onBlur}
          {...params}
          label="Enter a place"
          error={!!error}
          helperText={helperText}
          onKeyDown={(e) => {
            if (e.keyCode === 13 && e.target.value) {
              selectItem(currentOption);
            }
          }}
          fullWidth
          required
        />
      )}
      onHighlightChange={handleChange}
      renderOption={(props) => (

        <Grid container className="option" style={{ width: '100%' }} alignItems="center" onClick={() => selectItem(props.description)}>
          <Grid item>
            <Box
              component={LocationIcon}
              sx={{ color: 'text.secondary', mr: 2 }}
            />
          </Grid>
          <Grid item xs>
            <Typography variant="body2" color="text.secondary">
              {props?.description}
            </Typography>
          </Grid>
        </Grid>

      )}

    />
  );
};

export default CmpPlaceSearch;
