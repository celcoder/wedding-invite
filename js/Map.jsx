import React from 'react';
import PropTypes from 'prop-types';

const Map = props => <div>{props.text}</div>;

Map.defaultProps = {
  text: ''
};

Map.propTypes = {
  text: PropTypes.string
};

export default Map;
