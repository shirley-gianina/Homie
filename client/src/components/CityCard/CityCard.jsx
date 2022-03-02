import "./CityCard.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CityCard = () => {
  return (
    <div className="container">
      <img className="exploreDestinations" src="./../../images/exploredestinations.png" />
      <Card className="cityCard">
        <Card.Body>
          <Card.Img className="img" src="./../../images/newyork.jpeg" />
          <Card.Title className="cardTitle">New York</Card.Title>
        </Card.Body>

        <Card.Body>
          <Card.Img className="img" src="./../../images/berlin.jpeg" />
          <Card.Title className="cardTitle">Berlin</Card.Title>
        </Card.Body>
        <Card.Body>
          <Card.Img className="img" src="./../../images/sydney.jpeg" />
          <Card.Title className="cardTitle">Sydney</Card.Title>
        </Card.Body>
        <Card.Body>
          <Card.Img className="img" src="./../../images/barcelona.jpeg" />
          <Card.Title className="cardTitle">Barcelona</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CityCard;
