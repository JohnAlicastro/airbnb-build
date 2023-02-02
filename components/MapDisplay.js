import React, { useState } from 'react';
import Map from 'react-map-gl';

export const MapDisplay = () => {
  const [viewState, setViewState] = useState({
    width: '100%',
    height: '100%',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  });

  return (
    <Map
      mapStyle='mapbox://styles/jalicastro/cldnovdjb00ej01o6xjw12hbk'
      mapboxAccessToken={process.env.MAPBOX_KEY}
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
    ></Map>
  );
};

// export default MapDisplay
