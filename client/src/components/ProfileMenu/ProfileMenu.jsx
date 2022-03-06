import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import { BiBuildingHouse } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";

function ProfileMenu() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className="profile-card border">
        <div className="profile-card-header">
          <div className="row">
            <div className="col-5 d-flex justify-content-center">
              <img
                className="rounded-circle shadow"
                src={user?.image}
                alt=""
                width="85px"
              />
            </div>
            <div className="col-7 pt-2">
              <p className="text-dark fw-normal">
                {user?.firstName} {user?.lasttName}
              </p>
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
          <BiMessageSquareDetail /> <Link to="/profile/messages">Messages</Link>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
}

export default ProfileMenu;
