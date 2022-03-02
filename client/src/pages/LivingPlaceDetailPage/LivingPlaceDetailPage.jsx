import React from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import "./LivingPlaceDetailPage"

function LivingPlaceDetailPage() {
  return (
    <>
      <Container>
        <h3 className="fw-bold p-3">Nara Home Vigo</h3>
        <Row>
          <Col md={6}>
            <img
              className="rounded-start"
              width={"100%"}
              src="https://tripxtrip.com/_next/static/images/post-image-1-b6d9f12c5c4c74195c7da6f86c52a209.jpg"
              alt="img"
            />
          </Col>
          <Col md={6}>
            <Row>
              <Col md={6}>
                <img
                  width={"100%"}
                  src="https://gallery.tripxtrip.com/tripxtrip/hotel-4_thumb.jpg"
                  alt="img"
                />
              </Col>
              <Col md={6}>
                <img
                  className="rounded-end"
                  width={"100%"}
                  src="https://gallery.tripxtrip.com/tripxtrip/hotel-17_thumb.jpg"
                  alt="img"
                />
              </Col>
            </Row>
            <Row className="pt-5">
              <Col md={6}>
                <img
                  width={"100%"}
                  src="https://gallery.tripxtrip.com/tripxtrip/hotel-12_thumb.jpg"
                  alt="img"
                />
              </Col>
              <Col md={6}>
                <img
                  className="rounded-end"
                  width={"100%"}
                  src="https://gallery.tripxtrip.com/tripxtrip/hotel-14_thumb.jpg"
                  alt="img"
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Tabs
          defaultActiveKey="Overview"
          id="uncontrolled-tab-example"
          className="my-5 "
        >
          <Tab eventKey="overview" title="Overview">
            <h3 className="fw-bold">Duplex for sale in Prosperidad</h3>
            <p>510,000 €</p>
          </Tab>
          <Tab eventKey="amenities" title="Amenities"></Tab>
          <Tab eventKey="location" title="Location">
            <p>Chamartín, Madrid</p>
            <span>134 m²</span> |<span> 3 bedrooms</span> |
            <span> 1 bathrooms</span> |
            <span> Ground floor exterior with lift</span>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}

export default LivingPlaceDetailPage;


