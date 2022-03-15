/* eslint-disable eqeqeq */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import '../../styles.scss';
import CmpSpinner from './cmp-spinner';
import marker from '../../images/marker.png';

const EMPTY_SEARCH = 'EMPTY_SEARCH';

const CmpStaticMap = (props) => {
  const {
    apiKey, locationString, zoom, size, mapType, initialLocationString, mapConfig, markerVisible
  } = props;
  const staticMapUrl = 'https://maps.googleapis.com/maps/api/staticmap?';
  const [imageSrc, setImageSrc] = useState('');
  const [isDefaultMap, setIsDefaultMap] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [validMap, setValidMap] = useState(true);
  const [markerIsVisible, setMarkerIsVisible] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(true);
  const [imageStatus, setImageStatus] = useState({ loaded: false, error: false });
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const _initialZoom = mapConfig && mapConfig.initialZoom ? mapConfig.initialZoom : 3;
  const _mapScale = mapConfig && mapConfig.scale ? mapConfig.scale : 2;
  const _size = mapConfig && mapConfig.size ? mapConfig.size : size;
  let address;
  let active = true;

  useEffect(() => {
    setLoading(true);
    setIsVisible(false);

    if (isFirstLoad) locationChange();
    else {
      setTimeout(() => {
        if (active) locationChange();
      }, 1000);
    }
    setIsFirstLoad(false);

    return () => { active = false; };
  }, [locationString]);

  useEffect(() => {
    if (!markerVisible) setMarkerIsVisible(markerVisible);
    else {
      setTimeout(() => { if (active) setMarkerIsVisible(markerVisible); }, 1000);
    }
    return () => { active = false; };
  }, [markerVisible]);

  const locationChange = () => {
    if (locationString === EMPTY_SEARCH) {
      createMap(initialLocationString, _initialZoom, true);
      setValidMap(true);
    }

    address = locationString ? locationString.address : '';
    setSelectedAddress(address);
    setValidMap(locationString && locationString.zipCode != '');
    if (address) {
      createMap(address, zoom, false, locationString.lat, locationString.lng);
      setIsDefaultMap(false);
    } else {
      createMap(initialLocationString, _initialZoom, true);
      setValidMap(true);
    }
    setLoading(false);
    setMarkerIsVisible(true);
  };

  const createMap = (query, mapZoom) => {
    let map = `${staticMapUrl}center=${query}&scale=${_mapScale}&zoom=${mapZoom}&size=${_size}&maptype=${mapType}&markers=icon:${marker}`;
    map += `&key=${apiKey}`;
    map = map.trim();
    setImageSrc(map);
  };

  const onImageLoad = () => {
    changeImageStatus(true, false);
    setIsVisible(true);
    setIsDefaultMap(false);
  };

  const onImageError = () => {
    changeImageStatus(false, true);
    setIsVisible(false);
  };

  const changeImageStatus = (loadedState, errorState) => {
    setImageStatus({ ...imageStatus, ...{ loaded: loadedState, error: errorState } });
    setLoading(false);
  };

  return (
    <div className={`cmp-static-map ${isVisible ? 'visible' : ''} ${!validMap ? 'error' : ''}`} aria-hidden="true">
      {loading && <CmpSpinner cls="spinner-map" /> }
      <img className="marker" src={marker} alt="marker" />
      <img
        className="map"
        src={imageSrc}
        alt={`map of (${selectedAddress})`}
        onLoad={onImageLoad}
        onError={onImageError}
      />
    </div>
  );
};

CmpStaticMap.defaultProps = {
  initialLocationString: 'Oklahoma',
  zoom: 16,
  size: '600x400',
  mapType: 'roadmap'
};

export default CmpStaticMap;
