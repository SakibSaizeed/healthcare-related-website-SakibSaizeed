import React from "react";
import "./Service.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
const Service = ({ service }) => {
  const { id, name, img, type, price } = service;
  let navigate = useNavigate();
  const handleBook = () => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="service-card">
      <Card>
        <Card.Img variant="top" src={img} rounded-pill />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{type}</Card.Text>
          <Button className="box" onClick={handleBook}>
            See Details
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
