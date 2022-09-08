import React from "react";
import useServices from "../../../hooks/useServices";
import Service from "../Service/Service/Service";
import "./Services.css";
const Services = () => {
  const [services] = useServices([]);

  return (
    <div>
      <h2 className="text-center">Our Services</h2>
      <div className="services-container">
        {services.map((service) => {
          return <Service key={service.id} service={service}></Service>;
        })}
      </div>
    </div>
  );
};

export default Services;
