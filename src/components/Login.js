import React from "react";
import { Container } from "react-bootstrap";

function Login() {
  const googleLogin = () => {
    window.location.href =
      "https://audiomarking-backend.herokuapp.com/auth/google";
  };
  return (
    <>
      <Container className="mt-5">
        <button className="btn btn-link" onClick={googleLogin}>
          Login with Google
        </button>
      </Container>
    </>
  );
}

export default Login;
