import { Container, Button, Row, Col, ListGroup, Form } from "react-bootstrap";
import { AuthContext } from "../../context/auth.context";
import { useContext, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";

const ProfilePage = ({ username, firstName, lastName, phone, email }) => {
  const { user } = useContext(AuthContext);
  const [updateForm, setUpdateForm] = useState({
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
    setUpdateForm({
      ...updateForm,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();

    authService
      .updateUserProfile(updateForm)
      .then(({ data }) => {
        navigate("/profile");
      })
      .catch((err) =>
        console.log("OJO QUE AQUI VAN LOS ERRORES, MENDRUGO", err)
      );
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={4}>
          <ProfileMenu />
        </Col>
        <Col md={8}>
          <Form onSubmit={handleSubmit} className="updateForm">
            <Form.Group className="mb-3 w-100">
              <Form.Label>Firstname</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3 w-100">
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3 w-100">
              <Form.Label>username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={updateForm.username}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3 w-100">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={updateForm.phone}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3 w-100">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={updateForm.email}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3 w-100">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={updateForm.password}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" style={{ width: "100%" }}>
              Update
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
