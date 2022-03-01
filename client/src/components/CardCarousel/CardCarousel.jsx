import { Button, Card } from "react-bootstrap";
import { React, useState } from 'react';
import './CardCarousel.css';


function CardCarousel({ images }) {

  const [index, setIndex] = useState(0);
  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const next = () => {
      if(index < images.length - 1) {
        setIndex(index + 1)
      }
  };

  return (
      <Card style={{ width: "18rem" }}>
    <img src={images[index]} alt="cardimage" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
       <div className="card-carousel">
      <Button onClick={() => prev()}>〈</Button>
      <Button onClick={() => next()}>〉</Button>
      </div>
      </Card>
  );
}

export default CardCarousel;




