import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase/firebase.init";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const handleLogin = () => {
    signInWithEmailAndPassword(email, password);
  };
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    navigate(from, { replace: true });
  }

  const handleGoogle = () => {
    signInWithGoogle(auth);
  };
  if (error1) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading1) {
    return <p>Loading...</p>;
  }
  if (user1) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <Form className="form-container">
        <h3 className="text-center">Please Login</h3>
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button className="btn" onClick={() => handleLogin(email, password)}>
          {" "}
          Login
        </Button>
        <br />
        <span className="text-center">Or</span>
        <Button onClick={() => handleGoogle()}>Login With Google</Button>
        <p className="text-info">
          new to MediCare? <Link to="/signup">Sign Up Now</Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;
