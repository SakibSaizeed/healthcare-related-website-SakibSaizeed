import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase/firebase.init";
import "./SignUp.css";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
// import google from "./../assets/images/banner/";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const handleSignUp = () => {
    createUserWithEmailAndPassword(email, password, confirmPass);
  };

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <h5 className="text-center text-success">Welcome To Medicare</h5>;
  }
  if (user) {
    navigate("/");
  }
  const handleGoogle = () => {
    signInWithGoogle();
  };
  if (error1) {
    return (
      <div>
        <h5 className="text-danger text-center">Error: {error1.message1}</h5>
      </div>
    );
  }
  if (loading1) {
    return <p className="text-primary text-center">Loading...</p>;
  }
  // if (user1) {
  //   navigate(from, { replace: true });
  // }

  return (
    <div>
      <Form className="form-container">
        <h2 className="text-center text-info">Sign Up</h2>
        <Form.Group className="mb-3 mx-7 mt-3" controlId="formGroupEmail">
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPass(e.target.value)}
          />
        </Form.Group>
        <Button
          onClick={() => handleSignUp(email, password, confirmPass)}
          className="text-center"
        >
          {" "}
          Sign Up
        </Button>

        <p className="text-info">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
        <Button
          variant="outline-success"
          size="sm"
          className="btn-login"
          onClick={() => handleGoogle()}
        >
          Login With Google
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
