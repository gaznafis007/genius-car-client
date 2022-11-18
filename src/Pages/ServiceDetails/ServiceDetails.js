import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { _id, img, description, title, price } = useLoaderData();
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={img}
          alt="serviceImg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{description}</p>
          <button className="btn btn-primary">{price}$</button>
          <Link to={`/checkout/${_id}`} className="ml-4 text-blue-700">
            Checkout now!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
