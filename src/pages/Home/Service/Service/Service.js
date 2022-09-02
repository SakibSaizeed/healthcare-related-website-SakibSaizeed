import React from "react";
import "./Service.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import DetailService from "../DetailService/DetailService";
const Service = ({ service }) => {
  const { id, name, img } = service;
  let navigate = useNavigate();
  const handleBook = () => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="service-card">
      <Card style={{ width: "22rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className="box" onClick={handleBook}>
            book now
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
