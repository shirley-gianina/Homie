import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";
import profileService from "../../services/profile.service";

function ProfileLivingPlaces() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    profileService.getLivingPlaces().then((response) => {
      setPlaces(response.data);
    });
  }, []);

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md={4}>
            <ProfileMenu />
          </Col>
          <Col md={8}>
            {places.map((place) => {
              return <p>{place.title}</p>;
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProfileLivingPlaces;
