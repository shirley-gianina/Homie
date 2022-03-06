import React, { useEffect } from "react";
import HomeCard from "../../components/HomeCard/HomeCard";

import CityCard from "../../components/CityCard/CityCard";
import Header from "../../components/Header/Header";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import homieService from "../../services/homie.service";

function HomePage() {

const [places, setPlaces] = useState([])

  useEffect(() => {
    const searchParams = new URLSearchParams({ limit: 4})
    homieService.getAllLivingPlaces(searchParams)
    .then((response) => {
      setPlaces(response.data)
    })
  }, [])


  return (
    <>
      <Header />
      <Container>
        <h2 className="mt-5 mb-3">Explore Destinations</h2>
        <Carousel fade>
          <Carousel.Item>
            <Row>
              <Col md={3}>
                <CityCard
                  imageUrl="./../../images/newyork.jpeg"
                  city="Madrid"
                />
              </Col>
              <Col md={3}>
                <CityCard
                  imageUrl="./../../images/berlin.jpeg"
                  city="Berlin"
                />
              </Col>
              <Col md={3}>
                <CityCard
                  imageUrl="./../../images/sydney.jpeg"
                  city="Sydney"
                />
              </Col>
              <Col md={3}>
                <CityCard
                  imageUrl="./../../images/bcn.jpeg"
                  city="Barcelona"
                />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col md={3}>
                <CityCard
                  imageUrl="./../../images/sydney.jpeg"
                  city="Sydney"
                />
              </Col>
              <Col md={3}>
                <CityCard
                  imageUrl="./../../images/bcn.jpeg"
                  city="Barcelona"
                />
              </Col>
              <Col md={3}>
                <CityCard
                  imageUrl="./../../images/berlin.jpeg"
                  city="Berlin"
                />
              </Col>
              <Col md={3}>
                <CityCard
                  imageUrl="./../../images/newyork.jpeg"
                  city="Peru"
                />
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
        <h2 className="mt-5 mb-3">Travelers’ Choice</h2>
        <Row>
         { places.map((place) => {
           return(
              <Col md={3}>
              <HomeCard 
              id={place._id}
              price={place.price}
              location={place.location}
              title={place.title}
              images={place.images}
              >
              </HomeCard>
              </Col>
           )
          })}


        </Row>
        {/* <Row className="mb-5">
          <Col md={3}>
            <HomeCard
              id="1"
              title="test1"
              price={2}
              location={{
                province: "Madrid",
                city: "Madrid",
              }}
              images={[
                "https://gallery.tripxtrip.com/tripxtrip/hotel-2_thumb.jpg",
                "https://gallery.tripxtrip.com/tripxtrip/hotel-14_thumb.jpg",
                "https://gallery.tripxtrip.com/tripxtrip/hotel-12_thumb.jpg",
              ]}
            />
          </Col>
          <Col md={3}>
            <HomeCard
              id="2"
              title="test2"
              price={2}
              location={{
                province: "Madrid",
                city: "Madrid",
              }}
              images={[
                "https://gallery.tripxtrip.com/tripxtrip/hotel-12_thumb.jpg",
                "https://gallery.tripxtrip.com/tripxtrip/hotel-2_thumb.jpg",
                "https://gallery.tripxtrip.com/tripxtrip/hotel-14_thumb.jpg",
              ]}
            />
          </Col>
          <Col md={3}>
            <HomeCard
              id="3"
              title="test3"
              price={2}
              location={{
                province: "Almeria",
                city: "Roquetas de mar",
              }}
              images={[
                "https://gallery.tripxtrip.com/tripxtrip/hotel-14_thumb.jpg",
                "https://gallery.tripxtrip.com/tripxtrip/hotel-2_thumb.jpg",
                "https://gallery.tripxtrip.com/tripxtrip/hotel-12_thumb.jpg",
              ]}
            />
          </Col>
          <Col md={3}>
            <HomeCard
              id="4"
              title="test4"
              price={7}
              location={{
                province: "Valencia",
                city: "Valencia",
              }}
              images={[
                "https://gallery.tripxtrip.com/tripxtrip/hotel-18_thumb.jpg",
                "https://gallery.tripxtrip.com/tripxtrip/hotel-14_thumb.jpg",
                "https://gallery.tripxtrip.com/tripxtrip/hotel-12_thumb.jpg",
              ]}
            />
          </Col>
        </Row> */}
      </Container>
    </>
  );
}

export default HomePage;
