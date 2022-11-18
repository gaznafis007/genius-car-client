import React from "react";
import "./Carousel-gradient.css";
import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
import img5 from "../../assets/images/banner/5.jpg";
import img6 from "../../assets/images/banner/6.jpg";
import CarouselImg from "./CarouselImg";

const carouselData = [
  {
    id: 1,
    next: 2,
    prev: 6,
    image: img1,
  },
  {
    id: 2,
    next: 3,
    prev: 1,
    image: img2,
  },
  {
    id: 3,
    next: 4,
    prev: 2,
    image: img3,
  },
  {
    id: 4,
    next: 5,
    prev: 3,
    image: img4,
  },
  {
    id: 5,
    next: 6,
    prev: 4,
    image: img5,
  },
  {
    id: 6,
    next: 1,
    prev: 5,
    image: img6,
  },
];

const Carousel = () => {
  return (
    <div className="carousel w-full rounded-box">
      {carouselData.map((slide) => (
        <CarouselImg key={slide.id} slide={slide}></CarouselImg>
      ))}
    </div>
  );
};

export default Carousel;
