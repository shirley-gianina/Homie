import { Container, Row, Col } from "react-bootstrap";
import SignupForm from "../../components/SignupForm/SignupForm.jsx";

import "./SignupPage.css";

function SignupPage() {
  return (
    <Container fluid className="signup-page">
      <Row>
        <Col
          md={5}
          className="d-flex justify-content-center align-items-center"
        >
          <SignupForm />
        </Col>
        <Col md={7}>
          <img class="w-100" src="/images/login-page.png" alt="Signup" />
        </Col>
      </Row>
    </Container>
  );
}

export default SignupPage;
