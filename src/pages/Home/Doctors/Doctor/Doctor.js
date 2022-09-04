import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Doctor.css";
const Doctor = ({ doctor }) => {
  const { name, img, description } = doctor;
  return (
    <div className="doctor-card">
      <Card style={{ width: "22rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Doctor;
