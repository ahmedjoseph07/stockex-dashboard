import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import { GeneralContextProvider } from "./GeneralContext";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  }
  const handleProfileClick = (isProductDropdownUp) => {
    setSelectedMenu(!isProductDropdownUp);
  }

  // const menuClass = "menu";
  // const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      {/* <img src="download.png" className="menu-logo" style={{ width: "50px" }} /> */}
      <div className="profile" onClick={() => handleProfileClick}>
        <div className="avatar">ZU</div>
        <p className="username"></p>
      </div>
      <div>
        <Navbar collapseOnSelect expand="md" bg="light" variant="light" sticky="top">

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item className="fw-bold">
                <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
              </Nav.Item>
              <Nav.Item className="fw-bold">
                <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
              </Nav.Item>
              <Nav.Item className="fw-bold">
                <Nav.Link as={Link} to="/holdings">Holdings</Nav.Link>
              </Nav.Item>
              <Nav.Item className="fw-bold">
                <Nav.Link as={Link} to="/positions">Positions</Nav.Link>
              </Nav.Item>
              <Nav.Item className="fw-bold">
                <Nav.Link as={Link} to="/funds">Funds</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Menu;