import { Container, Button, Row, Col, ListGroup, Form } from "react-bootstrap";
import { AuthContext } from "../../context/auth.context";
import { useContext, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { BiBuildingHouse } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";

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
        console.log(data);
        navigate("/profile");
      })
      .catch((err) =>
        console.log("OJO QUE AQUI VAN LOS ERRORES, MENDRUGO", err)
      );
  }

  return (
    <Container>
      <Row>
        <Col md={6}>
          <div className="profile-card border">
            <div className="profile-card-header">
              <div className="row">
                <div className="col-5 d-flex justify-content-center">
                  <img
                    className="rounded-circle shadow"
                    src="/images/avatar-profile.png"
                    alt=""
                    width="85px"
                  />
                </div>
                <div className="col-7 pt-2">
                  <p className="text-dark fw-normal"> hola</p>
                  <p className="text-muted"></p>
                </div>
              </div>
            </div>
          </div>

          <ListGroup>
            <ListGroup.Item>
              <CgProfile /> <Link to="/profile">Profile</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <BiBuildingHouse />
              <Link to="/profile">Living places</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <BiMessageSquareDetail /> <Link to="/profile">Messages</Link>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={6}>
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
