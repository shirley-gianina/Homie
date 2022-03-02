import { Card, Carousel } from "react-bootstrap";
import { React, useState } from "react";
import "./HomeCard.css";
import { Link } from "react-router-dom";

function HomeCard({ id, price, address, title, images }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Link to={`/living-places/${id}`}>
      <Card className="rounded mx-auto" style={{ width: "18rem" }}>
        <Card.Header className="p-0">
          <Carousel
            interval={null}
            indicators={false}
            activeIndex={index}
            onSelect={handleSelect}
          >
            {images.map((imageUrl) => (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={imageUrl}
                  alt="carousel-img"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Card.Header>
        <Card.Body>
          <Card.Text className="text-muted mb-1">
            {address.city}, {address.province}
          </Card.Text>
          <Card.Title className="text-dark">{title}</Card.Title>
          <Card.Text className="text-dark">€{price} / Mes</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default HomeCard;
