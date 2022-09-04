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
    <div className="component-container">
      <Card className="text-center ">
        <Card.Header>{display?.name}</Card.Header>
        <Card.Body className="container-block block-1 ">
          <Card.Title>
            <img src={display?.img} alt="card-img" />
          </Card.Title>
          <Card.Text>{display?.description}</Card.Text>
          <Button variant="btn-card" onClick={handleBookService}>
            Book Service
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">medicare</Card.Footer>
      </Card>
    </div>
  );
};

export default DetailService;
