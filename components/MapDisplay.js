import React, { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import { getCenter } from 'geolib';
import 'mapbox-gl/dist/mapbox-gl.css';

export const MapDisplay = ({ searchResults }) => {
  // transform searchResults object into the long/lat object for geolib
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  // the long/lat of the center of the searchResults coordinates
  const center = getCenter(coordinates);

  // map viewport
  const [viewState, setViewState] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  // selected location (pin) on map
  const [selectedLocation, setSelectedLocation] = useState({});

  return (
    <Map
      mapStyle='mapbox://styles/jalicastro/cldnstyqj009701obkqfjv7y2'
      mapboxAccessToken={process.env.MAPBOX_KEY}
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker longitude={result.long} latitude={result.lat} offsetLeft={-20} offsetTop={-10}>
            <p onClick={() => setSelectedLocation(result)} className='animate-bounce cursor-pointer text-3xl' aria-label='push-pin' role='img'>
              📍
            </p>
          </Marker>

          {/* the popup that will show if we click on marker */}
          {selectedLocation.long === result.long ? (
            <Popup onClose={() => setSelectedLocation({})} closeOnClick={true} latitude={result.lat} longitude={result.long}>
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </Map>
  );
};

// export default MapDisplay
