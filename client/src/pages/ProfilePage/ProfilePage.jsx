import { Container, Button, Row, Col, ListGroup, Card } from "react-bootstrap";
import { AuthContext } from "../../context/auth.context";
import { useContext, useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { BiBuildingHouse } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import userService from "../../services/user.service";
import authService from "../../services/auth.service";
import "./ProfilePage.css";
// import user from "./../../../../"
// import Menu from "./../../components/Menu/Menu"

const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState();

  // const [userInfo, setUserInfo] = useState({
  //   username: "",
  //   firstName: "",
  //   lastName: "",
  //   phone: "",
  //   email: "",
  //   password: "",
  // });

  // useEffect(() => {
  //   userService
  //     .getUserProfile(user?._id)
  //     .then(({ data }) =>
  //       setUserInfo(data);
  //       console.log(data, "user data from context ");
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const navigate = useNavigate();

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
                    src=""
                    alt=""
                    width="100px"
                    height="135px"
                  />
                </div>
                <div className="col-7 pt-2">
                  {user && (
                    <p className="text-dark fw-normal">
                      {" "}
                      hola {user.firstName}
                    </p>
                  )}
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
              <Link to="/profile/living-places">Living places</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <BiMessageSquareDetail />
              <Link to="/profile/messages">Messages</Link>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={6}>
          <Card style={{ width: "35rem" }}>
            <Card.Body>
              {/* TODO add spiner when user info hasnt arrived yet */}
              {user ? (
                <>
                  <Card.Title> vvvvv{user.username} </Card.Title>
                  <Card.Text>{user.firstName}</Card.Text>
                  <Card.Text>{user.lastName}</Card.Text>
                  <Card.Text>{user.username}</Card.Text>
                  <Card.Text>{user.phone}</Card.Text>
                  <Button variant="primary">Create new living place
                  </Button>
                </>
              ) : (
                <Card.Title> CARGANDO INFO ... </Card.Title>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
