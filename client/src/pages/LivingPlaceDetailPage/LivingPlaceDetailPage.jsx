import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import homieService from "../../services/homie.service";
import { useEffect, React, useState } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import { FaBed, FaBath } from "react-icons/fa";
import { RiBuilding2Fill } from "react-icons/ri";

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

  return (
    <>
      {/* https://www.freecodecamp.org/news/how-to-create-an-image-gallery-with-css-grid-e0f0fd666a5c/ */}
      <Container>
        <Row className="mt-5">
          <Col className="gallery">
            {place?.images.slice(0, 4).map((image, index) => {
              return (
                <figure className={`gallery__item gallery__item--${index}`}>
                  <img className="gallery__img" src={image} alt="gallery" />
                </figure>
              );
            })}
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <Row className="d-flex align-items-center">
              <Col md={8}>
                <div>
                  <h2 className="fw-bold">{place?.title}</h2>
                  <span className="m-0 text-primary">
                    Entire rental unit hosted by{" "}
                    <span className="fw-bold fs-5">
                      {place?.owner.firstName} {place?.owner.lastName}
                    </span>
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <RiBuilding2Fill size={20} />
                  <span className="mx-3">{place?.features.m2} m2 </span> .
                  <FaBed size={20} />
                  <span className="mx-3">
                    {place?.features.bedrooms} bedrooms
                  </span>{" "}
                  .
                  <FaBath height={20} width={20} />
                  <span className="mx-3">
                    {place?.features.bathrooms} bathrooms
                  </span>
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
            <p>{place?.price} ???</p>
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
