import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase/firebase.init";
import "./Login.css";
import google from "../../assets/images/banner/googlefinal.svg";
import GoogleButton from 'react-google-button'
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
        <p className="text-danger text-center">Error: {error.message}</p>
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
        <Form.Group className="mb-1" controlId="formGroupPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
          <Button variant="outline-success" size="sm" className="btn-login"
          onClick={() => handleLogin(email, password)}>
        Login
        </Button>
        <h6 className="text-dark text-center">
          New User? 
          <Link to="/signup">Sign Up Now</Link>
          </h6> 
          <Button variant="outline-success" size="sm" className="btn-login"
           onClick={() => handleGoogle()}><img src={google} alt="" className="login-btn"/>
        Login With Google
        </Button>

      </Form>  
    </div>
  );
};

export default Login;
