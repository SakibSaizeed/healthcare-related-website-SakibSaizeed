import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase/firebase.init";
import "./Appointment.css";
const Appointment = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };

  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };

  const handlePhoneBlur = (event) => {
    setPhone(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
    const apointmentFormData = { name, email, address, phone };
    console.log(apointmentFormData);
    navigate("/thankyou");
  };

  return (
    <div>
      <Form className="appointmentform">
        <h4>Book An Appointment</h4>
        <br />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="input" value={user?.email} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control type="input" onBlur={handleNameBlur} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="input" onBlur={handlePhoneBlur} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Address</Form.Label>
          <Form.Control type="input" onBlur={handleAddressBlur} />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="form-btn"
          onClick={handleCreateUser}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Appointment;
