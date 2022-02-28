import { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import authService from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./../../context/auth.context";

function LoginForm() {
  const [loginForm, setLoginForm] = useState({
    password: "",
    email: "",
  });

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();

    authService
      .login(loginForm)
      .then(({ data }) => {
        //console.log("JWT token", data.authToken)
        storeToken(data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <Form onSubmit={handleSubmit} className="login-form d-flex">
      <Form.Group className="mb-3 w-100">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={loginForm.email}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3 w-100">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={loginForm.password}
          onChange={handleInputChange}
        />
      </Form.Group>
      <div className="w-100 separator d-flex align-items-center justify-content-center text-center mt-5">
        <hr className="w-100" />
        <p className="w-100 pt-2 text-muted px-2">O Inicia Sesion Con</p>
        <hr className="w-100" />
      </div>

      <div className="d-flex w-100">
        <button type="submit" className="btn btn-danger w-100 mt-4 me-3">
          Google+
        </button>
        <button type="submit" className="btn btn-secondary w-100 mt-4">
          Github
        </button>
      </div>
      <p className="text-center mt-3 fs-5">
        No tienes una cuenta!
        <a className="text-decoration-none fw-bold" href="/registro">
          Registrate
        </a>
      </p>

      <Button variant="primary" type="submit" style={{ width: "100%" }}>
        Iniciar sesión
      </Button>
    </Form>
  );
}

export default LoginForm;
