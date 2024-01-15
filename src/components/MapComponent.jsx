import React, { useState, useEffect } from 'react';
import MapLink from './MapLink';

const Map = () => {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  const staticLocation = {lat:17.410477115117455, lng:78.37629857337336}; 

  return (
    <div>
  
      {currentLocation ? (
        <div>
          <MapLink origin={currentLocation} destination={staticLocation} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Map;