import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { shape, number } from 'prop-types';
import Map from './Map';

import './styles/GoogleMap.css';

const redHue = [
  {
    stylers: [{ hue: '#dd0d0d' }]
  },
  {
    featureType: 'road',
    elementType: 'labels',
    stylers: [{ visibility: 'off' }]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ lightness: 100 }, { visibility: 'simplified' }]
  }
];

class GoogleMap extends Component {
  static defaultProps = {
    center: { lat: 40.7685018, lng: -73.7383554 },
    zoom: 17
  };

  static propTypes = {
    center: shape({
      lat: number,
      lng: number
    }),
    zoom: number
  };

  createMapOptions = customStyling => ({
    styles: customStyling
  });

  renderMarkers = (map, maps) =>
    new maps.Marker({
      position: this.props.center,
      map
    });

  render() {
    return (
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyACc2__sVFWPLcHbVpQxWQj2YrquHhA7c8', language: 'Kr' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={this.createMapOptions(redHue)}
          onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
          yesIWantToUseGoogleMapApiInternals
        >
          <Map lat={this.props.center.lat} lng={this.props.center.lng} text={''} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
