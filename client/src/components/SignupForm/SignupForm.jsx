import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import authService from "../../services/auth.service";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const [signupForm, setSignupForm] = useState({
    username: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupForm({
      ...signupForm,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();

    authService
      .signup(signupForm)
      .then(({ data }) => {
        navigate("/profile");
      })
      .catch((err) =>
        console.log("OJO QUE AQUI VAN LOS ERRORES, MENDRUGO", err)
      );
  }

  return (
    <Form onSubmit={handleSubmit} className="signup-form">
      <Form.Group className="mb-3 w-100">
        <Form.Label>Firstname</Form.Label>
        <Form.Control
          type="text"
          name="firstName"
          value={signupForm.firstName}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3 w-100">
        <Form.Label>Lastname</Form.Label>
        <Form.Control
          type="text"
          name="lastName"
          value={signupForm.lastName}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3 w-100">
        <Form.Label>username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={signupForm.username}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3 w-100">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          name="phone"
          value={signupForm.phone}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3 w-100">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={signupForm.email}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3 w-100">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={signupForm.password}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit" style={{ width: "100%" }}>
        Signup
      </Button>
    </Form>
  );
}

export default SignupForm;
