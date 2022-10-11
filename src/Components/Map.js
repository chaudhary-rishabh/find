import React from 'react'
import {useMemo} from 'react'
import '../Style/common.css'

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
  useLoadScript
} from '@react-google-maps/api'

const Map = () => {
  const center = useMemo(() => ({ lat: 22.3072, lng: 73.1812 }), []);
  const options = useMemo(() => ({
    disableDefaultUI: true,
    clickableIcons:false
   }), []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries:['places']
  })

  if (!isLoaded) {
  return <h1>Loading....</h1>
}
  return (
    <div>
      <GoogleMap center={center} options={options} zoom={12} mapContainerClassName="map-container">
      </GoogleMap>
    </div>
  )
};
export default Map