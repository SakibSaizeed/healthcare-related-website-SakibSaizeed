import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Doctor.css";

const Doctor = ({ doctor }) => {
  const { id, name, img, speciality } = doctor;
  const navigate = useNavigate();
  const handleDoctor = () => {
    navigate(`/doctor/${id}`);
  };
  const handleDoctorAppoint = () => {
    navigate("/appointment");
  };
  return (
    <div className="doctor-card">
      <Card style={{ width: "22rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{speciality}</Card.Text>
          <Button
            variant="primary"
            className="mx-3"
            onClick={handleDoctorAppoint}
          >
            Appointment
          </Button>
          <Button variant="primary" className="mx-3" onClick={handleDoctor}>
            Details
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Doctor;
