import { Carousel, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import homieService from "../../services/homie.service";
import { useEffect, React, useState } from "react";
// import "./ContactForm/ContactForm"
import ContactForm from "../../components/ContactForm/ContactForm";

import "./LivingPlaceDetailPage.css";

function LivingPlaceDetailPage() {
  const [place, setPlaceDetail] = useState();
  const { id } = useParams();

  useEffect(() => {
    homieService
      .getOneLivingPlace(id)
      .then((response) => setPlaceDetail(response.data));
  }, []);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel
        className="carousel-detail"
        interval={null}
        indicators={true}
        activeIndex={index}
        onSelect={handleSelect}
      >
        {place?.images.map((image, idx) => (
          <Carousel.Item className="w-100">
            <img
              fluid="true"
              key={idx}
              className="d-block w-100"
              src={image}
              alt="carousel-img"
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <Container>
        <Row className="mt-5">
          <Col md={8}>
            <h1>{place?.title}</h1>
            <p>{place?.price} €</p>
            <p>{place?.location.address}</p>
            <p>{place?.location.city}</p>
            <p>{place?.location.province}</p>
            <p>{place?.location.zipcode}</p>
            <p>{place?.location.country}</p>
            <span>{place?.features.m2}</span>|
            <span>{place?.features.bedrooms}</span>|
            <span>{place?.features.bathrooms}</span>|
            <span>{place?.features.amenities}</span>
          </Col>
          <Col md={4}>
            <ContactForm owner={place?.owner} id={place?._id} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default LivingPlaceDetailPage;
