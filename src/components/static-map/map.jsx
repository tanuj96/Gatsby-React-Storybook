/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable eqeqeq */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import { Grid } from '@material-ui/core';
import React, {
  useEffect,
  useRef, useState
} from 'react';
import CmpPlaceSearch from './cmp-place-search';
import CmpStaticMap from './cmp-static-map';

const EMPTY_SEARCH = 'EMPTY_SEARCH';

const Map = ({
  place, showMap = true, fromBuy = false, fromSell = false, value = ''
}) => {
  const [location, setLoaction] = useState();
  const [locSelected, setlocSelected] = useState(value);
  const [directionEntered, setDirectionEntered] = useState(false);
  const [markerVisible, setMarkerVisible] = useState(false);
  const [emptySearch, setEmptySearch] = useState(true);
  const _adaAlert = useRef();

  const getSelectedDirection = (direction) => {
    if (direction != '' && direction != EMPTY_SEARCH) {
      setLoaction(direction);
      setEmptySearch(false);
    } else if (direction == EMPTY_SEARCH) {
      setLoaction(EMPTY_SEARCH);
      setMarkerVisible(false);
      setEmptySearch(true);
    } else {
      setLoaction('');
      setEmptySearch(true);
    }
  };

  const getLocation = (direction) => {
    if (direction && direction.zipCode !== '') {
      setMarkerVisible(location != EMPTY_SEARCH);
      setDirectionEntered(location != EMPTY_SEARCH);
    } else {
      setDirectionEntered(false);
      setMarkerVisible(false);
    }
  };

  useEffect(() => {
    if (value != locSelected && value) {
      setlocSelected(value);
    }
  }, [value]);

  const mapZoom = 12;

  const getSelectedLocationFromDropdown = (val) => {
    setlocSelected(val);
    place(val);
  };

  return (
    <Grid container className={!showMap ? 'no-map' : ''}>
      <Grid className="map-search" item xs={12}>
        <CmpPlaceSearch value={locSelected} selectedLocationFromDropdown={getSelectedLocationFromDropdown} emptySearch={emptySearch} id="map-loc" selected={getSelectedDirection} {...{ fromBuy, fromSell }} />
      </Grid>
      {showMap && (
        <Grid item xs={12} className="map-wrapper">
          <CmpStaticMap locationString={locSelected} markerVisible={markerVisible} apiKey="AIzaSyD2qekr3ncyEGBD36Z-AOSmkbjwj3juhU4" zoom={mapZoom} loadedLocation={getLocation} />
        </Grid>
      )}

    </Grid>
  );
};

export default Map;
