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
    <div className="services-container">
      {services.map((service) => {
        return <Service key={service.id} service={service}></Service>;
      })}
    </div>
  );
};

export default Services;
