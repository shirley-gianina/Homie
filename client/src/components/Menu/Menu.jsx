import { Container, Button, Row, Col, ListGroup, Card } from "react-bootstrap";
import { AuthContext } from "../../context/auth.context";
import { useContext, useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { BiBuildingHouse } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";


const Menu = () => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Col md={3}>
          <div className="profile-card border">
            <div className="profile-card-header">
              <div className="row">
                <div className="col-5 d-flex justify-content-center"></div>
                <div className="col-7 pt-2">
                  {user && (
                    <p className="text-dark fw-normal username">
                      {user.username}
                    </p>
                  )}
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
       
       </Row>

       
    </Container>
  );
};

export default Menu;
