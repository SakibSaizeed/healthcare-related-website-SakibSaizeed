import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import useDoctorsData from "../../../../hooks/useDoctorsData";

const DoctorProfile = () => {
  let { doctorId } = useParams();
  let navigate = useNavigate();
  let [doctors] = useDoctorsData([]); //fetch data using custom hooks
  let profile = {};
  profile = doctors.find((value) => {
    return value.id === parseInt(doctorId);
  });
  const getAppointNow = () => {
    navigate("/thankyou");
  };
  return (
    <div className="component-container">
      <div className="doctor-card">
        <Card style={{ width: "22rem" }}>
          <Card.Img variant="top" src={profile?.img} />
          <Card.Body>
            <Card.Title>{profile?.name}</Card.Title>
            <Card.Text>{profile?.speciality}</Card.Text>
            <Card.Text>{profile?.degree}</Card.Text>

            <Button variant="btn" className="mx-3" onClick={getAppointNow}>
              Get Apointment Now
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default DoctorProfile;
