import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Service from "../Service/Service/Service";
import "./Services.css";
const Services = () => {
  const [services, setServices] = useState([]);
  const url = "./services.json";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
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
