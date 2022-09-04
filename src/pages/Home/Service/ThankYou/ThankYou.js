import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase/firebase.init";
import { useNavigate } from "react-router-dom";
import "./ThankYou.css";
function ThankYou() {
  const [show, setShow] = useState(false);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/");
  };
  const handleShow = () => setShow(true);
  return (
    <div className="text-center terms-background ">
      <div>
        <h1>Our terms And Conditions</h1>
        {/* <h4 className="terms">
          A patient, his/her representatives/ attendant/ relative/ friend or
          affiliates (“you” or “User”); or A user of the Website (“you” or
          “User”).
        </h4> */}
        <p className="terms">
          This Agreement applies to all services made available by medicare on
          the WebsiteThe Services may change from time to time, at the sole
          discretion of medicare, and the Agreement will apply to your visit to
          and your use of the Website to avail the Service, as well as to all
          information provided by you on the Website at any given point in
          time.This Agreement defines the terms and conditions under which you
          are allowed to use the Website and describes the manner in which we
          shall treat your account while you are registered as a member with us.
          You acknowledge that you will be bound by this Agreement for availing
          any of the Services offered by us. If you do not agree with any part
          of the Agreement, please do not use the Website or avail any
          Services.Your access to use of the Website and the Services will be
          solely at the discretion of medicare by the developer SakibSaizeed.
        </p>
      </div>

      <Button variant="primary" onClick={handleShow}>
        Click To Confirm
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thank You {user?.displayName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>
            Thank you for being with{" "}
            <a href="/home" className="text-success">
              MediCare
            </a>
            . We will contact with you soon..{" "}
          </h5>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Back To Home
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ThankYou;
