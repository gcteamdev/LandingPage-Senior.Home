import React from 'react';
import './Body.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cardPic2 from '../assets/istockphoto-1286546794-612x612.png';
import cardPic3 from '../assets/istockphoto-1097353864-612x612.png';
import cardPic1 from '../assets/istockphoto-471910611-612x612.png';
import cardPic4 from '../assets/group-dining-resized-.png';

function body() {
  return (
    <div className="pageBody">
      <h2 className="bodyHeader ">Horizon In Daily Living</h2>
      <div className="livingTypes">
      <button type="button" className="btn btn-outline-success bg-success text-white">Independent Living</button>
      <button type="button" className="btn btn-outline-light text-dark">Assisted Living</button>
      </div>
      <div className="groupLivingCards d-block d-md-flex">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={cardPic1} />
          <Card.Body>
            <Card.Title>Dine In & Gather</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="light">Get details!</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={cardPic2} />
          <Card.Body>
            <Card.Title>Club & Activity</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="light">Read more!</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={cardPic3} />
          <Card.Body>
            <Card.Title>Routine Checkups</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="success">Get details!</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={cardPic4} />
          <Card.Body>
            <Card.Title>Friendly Environment</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="light">Read more!</Button>
          </Card.Body>
        </Card>
      </div>
      
    </div>
  );
}

export default body;