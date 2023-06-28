import React from "react";
import HeroSection from "./components/HeroSection";
import Popular from "./components/Popular";
import Steps from "./components/Steps";
import Gallery from "./components/Gallery";
import Review from "./components/Review";
import OrderSection from "./components/OrderSection";
import Speciality from "./components/Speciality";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Speciality />
      <Popular />
      <Steps />
      <Gallery />
      <Review />
      <OrderSection />
    </>
  );
};

export default Home;
