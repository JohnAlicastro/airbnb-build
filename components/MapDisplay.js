import React from 'react';
import Map from 'react-map-gl';

export const MapDisplay = () => {

  

  return <Map mapStyle='mapbox://styles/jalicastro/cldnovdjb00ej01o6xjw12hbk' mapboxAccessToken={process.env.MAPBOX_KEY}></Map>;
};

// export default MapDisplay
