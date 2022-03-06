import React, { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";
import profileService from "../../services/profile.service";

function ProfileMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    profileService.getMessages().then((response) => setMessages(response.data));
  }, []);
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md={4}>
            <ProfileMenu />
          </Col>
          <Col md={8}>
            {messages.map((message, i) => {
              return <p key={i}>{message.name}</p>;
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProfileMessages;
