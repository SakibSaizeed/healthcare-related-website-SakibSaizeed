import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./DetailService.css";

const DetailService = () => {
  let { serviceId } = useParams();
  let navigate = useNavigate();
  let url = `/services.json`;
  let [services, setServices] = useState([]);
  let display = {};
  const handleBookService = () => {
    navigate("/thankyou");
  };
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  //console.log(services);
  display = services.find((d) => d.id === parseInt(serviceId));

  return (
    <div>
      <Card className="component-container">
        <Card.Img variant="top" src={display?.img} className="service-img" />
        <Card.Body>
          <Card.Title>{display?.name}</Card.Title>
          <Card.Text>{display?.type}</Card.Text>
          <Card.Text>{display?.description}</Card.Text>
          <Card.Text>Fees:{display?.price}$</Card.Text>

          <Button variant="btn" onClick={handleBookService}>
            Book Now
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DetailService;
