import React from 'react';
import { Button } from 'semantic-ui-react';

const MapLink = ({ origin, destination }) => {
  const handleClick = () => {
    const url = `https://www.google.com/maps/dir/?api=1&origin=${origin.lat},${origin.lng}&destination=${destination.lat},${destination.lng}`;
    window.open(url, '_blank');
  };

  return (
    <Button primary onClick={handleClick}>
      Show Route
    </Button>
  );
};

export default MapLink;