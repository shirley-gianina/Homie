import React from "react";
import CardCarousel from "../../components/CardCarousel/CardCarousel";
import Carousel from "../../components/Carousel/Carousel"

import CityCard from "../../components/CityCard/CityCard";


function HomePage() {
  return (
    <>
      <Carousel />
      <CardCarousel
        images={[
          "https://randomuser.me/api/portraits/women/1.jpg",
          "https://randomuser.me/api/portraits/men/1.jpg",
          "https://randomuser.me/api/portraits/women/2.jpg",
          "https://randomuser.me/api/portraits/men/2.jpg",
        ]}
      />
      <CityCard />
    </>
  );
}

export default HomePage;
