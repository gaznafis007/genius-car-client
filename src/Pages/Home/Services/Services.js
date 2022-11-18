import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://genius-car-server-rho-tawny.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <div>
      <h2 className="text-2xl text-center font-semibold my-8">
        This is services
      </h2>
      <div className="my-6 grid gap-12 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
