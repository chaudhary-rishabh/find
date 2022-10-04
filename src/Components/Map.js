import React from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {
  render() {
    return (
      <Map google={this.props.google} zoom={10} style={{width:'50%', height:'50%'}}
          initialCenter={
            {
              lat: 28.704060,
              lng: 77.102493
            }
          }>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  API_KEY: ("AIzaSyAAj4PQ_3-3HGV64WT61MKeuDph7IQSYDA")
})(MapContainer)
