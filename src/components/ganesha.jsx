import React from "react";
import { Container, Image, Header} from "semantic-ui-react";
export default function Ganesh(){
    return(<Container className="event-details-Segment" textAlign="center">
    <Image src='./Assets/ganesh.png' size='small' verticalAlign='middle' />{' '}
    <span><Header as='h3' style={{ fontFamily: 'Quicksand', marginTop: '10px' }}>
        Vakratunda Mahakaya Surya Koti Sama Prabha
        Nirvighnam Kuru Me Deva Sarva Karyesu Sarvada.
        </Header>
    </span>
    </Container>);
}