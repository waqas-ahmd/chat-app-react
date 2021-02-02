import React, { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./styles.css";
import { v4 as uuidv4 } from "uuid";

const Login = ({ onIdSubmit }) => {
  const idRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onIdSubmit(idRef.current.value);
  };

  const createNewId = () => {
    onIdSubmit(uuidv4());
  };

  return (
    <div>
      <Container className="LoginContainer">
        <Form onSubmit={handleSubmit} className="LoginForm">
          <Form.Group>
            <Form.Label>Enter your ID</Form.Label>
            <Form.Control type="text" ref={idRef} />
          </Form.Group>
          <Button type="submit" className="mr-2">
            Login
          </Button>
          <Button onClick={createNewId} variant="secondary">
            Create New ID
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
