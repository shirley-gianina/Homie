import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import homieService from "../../services/homie.service";
import { useEffect, React, useState } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import { FaBed, FaBath } from "react-icons/fa";
import "./LivingPlaceDetailPage.css";
import Amenities from "../../components/Amenities/Amenities";

function LivingPlaceDetailPage() {
  const [place, setPlaceDetail] = useState();

  const { id } = useParams();

  useEffect(() => {
    homieService.getOneLivingPlace(id).then(({ data }) => {
      setPlaceDetail(data);
    });
  }, []);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    // width={idx % 4 == 0 ? 200 / (idx + 1)}

    <>
      {/* <Carousel
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
      </Carousel> */}
      {/* https://www.freecodecamp.org/news/how-to-create-an-image-gallery-with-css-grid-e0f0fd666a5c/ */}
      <div class="gallery">
        {place?.images.slice(0, 4).map((image, index) => {
          return (
            <figure className={`gallery__item gallery__item--${index}`}>
              <img className="gallery__img" src={image} alt="gallery" />
            </figure>
          );
        })}
      </div>
      <Container>
        <Row className="mt-5">
          <Col md={8}>
            <Row className="d-flex align-items-center">
              <Col md={8}>
                <div>
                  <h2 className="fw-bold">{place?.title}</h2>
                  <span className="m-0 text-primary">
                    Entire rental unit hosted by {place?.owner.firstName}{" "}
                    {place?.owner.lastName}
                  </span>
                </div>
                <div>
                  <span>{place?.features.m2} m2 </span> .
                </div>
                <div>
                  <FaBed />
                  <span>{place?.features.bedrooms} bedrooms</span> .
                </div>
                <div>
                  <FaBath />
                  <span>{place?.features.bathrooms}bathrooms</span>
                </div>
              </Col>
              <Col md={4}>
                <div className="d-flex justify-content-center">
                  <img
                    className="rounded-circle shadow img-profile"
                    src={place?.owner.image}
                    alt="user-img"
                  />
                </div>
              </Col>
            </Row>

            <hr />
            <Amenities amenities={place?.amenities} />
            <span>
              {place?.amenities.terrace ? <p>Tiene terrace</p> : null}
            </span>
            <p>{place?.price} €</p>
            <p>{place?.location.address}</p>
            <p>{place?.location.city}</p>
            <p>{place?.location.province}</p>
            <p>{place?.location.zipcode}</p>
            <p>{place?.location.country}</p>
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
