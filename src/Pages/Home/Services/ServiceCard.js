import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { title, _id, img, price, description } = service;
  const navigate = useNavigate();
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="cardImg" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description.slice(0, 150) + "..."}</p>
        <p className="my-4">Price: {price}$</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => navigate(`/services/${_id}`)}
            className="btn btn-primary"
          >
            details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
