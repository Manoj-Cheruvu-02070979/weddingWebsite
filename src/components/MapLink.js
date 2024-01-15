import React from 'react';

const MapLink = ({ origin, destination }) => {
  const handleClick = () => {
    const url = `https://www.google.com/maps/dir/?api=1&origin=${origin.lat},${origin.lng}&destination=${destination.lat},${destination.lng}`;
    window.open(url, '_blank');
  };

  return (
    <button onClick={handleClick}>
      Show Route
    </button>
  );
};

export default MapLink;