import React from "react";
import NewLivingPlaceForm from "../../components/NewLivingPlaceForm/NewLivingPlaceForm";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
function NewLivingPlaceFormPage() {
  return (
    <>
      <Container>
        <h3>New living place</h3>
        <NewLivingPlaceForm />
      </Container>
    </>
  );
}

export default NewLivingPlaceFormPage;
