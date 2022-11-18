import React from "react";

const CarouselImg = ({ slide }) => {
  const { id, prev, next, image } = slide;
  const imgPosition = {
    objectFit: "cover",
    objectPosition: "center",
  };
  return (
    <div id={`slide${id}`} className="carousel-item relative  w-full">
      <div className="banner-gradient">
        <img
          src={image}
          alt="sliderImg"
          style={imgPosition}
          className="w-full"
        />
      </div>

      <div className="absolute flex justify-end gap-2 transform -translate-y-1/2  left-20 top-1/3">
        <h2 className="text-6xl font-bold text-white">
          Affordable <br />
          Price for car <br />
          Servicing
        </h2>
      </div>
      <div className="absolute flex justify-end gap-2 w-1/2 transform -translate-y-1/2 left-20 top-1/2">
        <p className="text-white">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
      </div>
      <div className="absolute flex justify-start gap-2 w-1/2 transform -translate-y-1/2 left-20 top-2/3">
        <button className="btn btn-error btn-outline">Discover more</button>
        <button className="btn btn-error">Latest Projects</button>
      </div>
      <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 right-5 bottom-0">
        <a
          href={`#slide${prev}`}
          className="btn btn-outline btn-error btn-circle"
        >
          ❮
        </a>
        <a
          href={`#slide${next}`}
          className="btn text-white btn-error btn-circle"
        >
          ❯
        </a>
      </div>
    </div>
  );
};

export default CarouselImg;
