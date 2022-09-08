import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./DetailService.css";
import useServices from "../../../../hooks/useServices";

const DetailService = () => {
  let { serviceId } = useParams();
  let navigate = useNavigate();
  let [services] = useServices([]);
  let display = {}; //declaring object variable for storing matched data by id
  const handleBookService = () => {
    navigate("/thankyou");
  };

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
