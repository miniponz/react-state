import React from 'react';
import PropTypes from 'prop-types';

function RandomColor({ color }) {
  return (
    <>
    <div style={ { background: color, height: '100px', width: '100px' } }></div>
    </>
  );
}

RandomColor.propTypes = {
  color: PropTypes.string.isRequired
};

export default RandomColor;
