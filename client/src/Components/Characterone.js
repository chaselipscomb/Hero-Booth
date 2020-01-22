import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';

function Characterone() {

    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://www.superherodb.com/pictures2/portraits/10/100/727.jpg" />
          <br />
          <center><Card.Title><strong>Hulk</strong></Card.Title></center>
          <ListGroupItem>Intelligence: <span>50</span></ListGroupItem>
          <ListGroupItem>Strength: <span>50</span></ListGroupItem>
          <ListGroupItem>Speed: <span>50</span></ListGroupItem>
          <ListGroupItem>Durability: <span>50</span></ListGroupItem>
          <ListGroupItem>Power: <span>50</span></ListGroupItem>
          <ListGroupItem>Combat: <span>50</span></ListGroupItem>
      </Card>
    )
}
export default Characterone;