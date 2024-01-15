import React, { useState } from "react";
import Ganesh from "./ganesha";
import Map from "./MapComponent";
import { Container, Divider, Header, Icon, Button } from "semantic-ui-react";

export default function EventDetails() {
  const [showMap, setShowMap] = useState(false);

  const handleOpenMap = () => {
    setShowMap(true);
  };


  return (
    <div>
      <Ganesh />
      <Divider />
      <Container style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '30px', marginLeft: '5px', marginRight: '5px' }}>
        <div>
          <Icon name="building" size="huge" />
          <Header style={{ fontFamily: 'Signika', marginTop: '10px' }}>
            Venue Details
          </Header>
        </div>
        <div>
          <p style={{ fontFamily: 'Shadows Into Light', fontWeight: 'bold' }}>Marriage, Sangeeth Venue: Club House, Lanco Hills, Hyderabad, Telangana.</p>
          <Button primary onClick={handleOpenMap}>Open in Google Maps</Button>
        </div>
      </Container>

      {showMap && <Map />}
    </div>
  );
}
