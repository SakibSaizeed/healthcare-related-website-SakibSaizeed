import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailService = () => {
  let { serviceId } = useParams();

  let url = `/services.json`;
  let [services, setServices] = useState([]);
  let display = {};

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  //console.log(services);
  display = services.find((d) => d.id === parseInt(serviceId));

  return (
    <div className="text-center service-card ">
      <h1>Detail of service{serviceId}</h1>
      <h2>{display?.name}</h2>
      <img src={display?.img} alt="serviceImage" />
    </div>
  );
};

export default DetailService;
