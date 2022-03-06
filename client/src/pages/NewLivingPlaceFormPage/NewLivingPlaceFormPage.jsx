import React from "react";
import NewLivingPlaceForm from "../../components/NewLivingPlaceForm/NewLivingPlaceForm";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./NewLivingPlaceFormPage"

function NewLivingPlaceFormPage() {
  return (
    <>
      <Container>
        <h5>New living place</h5>
        <NewLivingPlaceForm />
      </Container>
    </>
  );
}

export default NewLivingPlaceFormPage;
