import React, { PureComponent } from 'react';
import GoogleMapReact from 'google-map-react';
import { shape, number } from 'prop-types';
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

class GoogleMap extends PureComponent {
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
    styles: customStyling,
    disableDefaultUI: true
  });

  openToNewTab = () => {
    const url = `https://www.google.com.sa/maps/place/Eun+Hae+Presbyterian+Church/@40.7684968,-73.7383359,18.25z/data=!4m5!3m4!1s0x89c289fa8de502a3:0x606d935508758062!8m2!3d40.768502!4d-73.7383555?hl=en`;
    window.open(url, '_blank');
  };

  renderMarkers = (map, maps) =>
    new maps.Marker({
      position: this.props.center,
      map
    });

  render() {
    return (
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyACc2__sVFWPLcHbVpQxWQj2YrquHhA7c8' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={this.createMapOptions(redHue)}
          onClick={this.openToNewTab}
          onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
          yesIWantToUseGoogleMapApiInternals
        />
      </div>
    );
  }
}

export default GoogleMap;
