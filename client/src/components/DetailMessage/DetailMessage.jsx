import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import homieService from "../../services/homie.service";

function DetailMessage() {
  const [messageForm, setMessageForm] = useState({
    // owner: "",
    email: "",
    message: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMessageForm({
      ...messageForm,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();

    homieService
      .saveMessageLivingPlace(messageForm)
      .then((response) => navigate("/"))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <h1>Ask the advertiser</h1>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              type="text"
              name="message"
              value={messageForm.message}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3 w-100">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={messageForm.phone}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3 w-100">
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={messageForm.email}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3 w-100">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              name="owner"
              value={messageForm.owner}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" style={{ width: "100%" }}>
            Contact
          </Button>
          <Form.Check
            type="checkbox"
            label="Save to favourites"
            name="Save to favourites"
            onChange={handleInputChange}
          />
        </Form>
        <div>
          <p className="text-muted">Professional advertiser</p>
          <span>Phone:</span> 34 643 660 907
          <h3>Name:</h3> Shirley
        </div>
      </Container>
    </>
  );
}

export default DetailMessage;
