import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  // const handleMenuClick = (index) =>{
  //   setSelectedMenu(index);
  // }
  const handleProfileClick = (isProductDropdownUp) =>{
    setSelectedMenu(!isProductDropdownUp);
  }

  // const menuClass = "menu";
  // const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
    {/* <img src="download.png" className="menu-logo" style={{ width: "50px" }} /> */}
    <div className="profile" onClick={()=>handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username"></p>
        </div>
    <div>
    <Navbar collapseOnSelect expand="md" bg="light" variant="light" sticky="top">
      <Container>
        {/* Hamburger toggle button for smaller screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsable menu */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item className="fw-bold">
              <Nav.Link   as={Link} to="/">Dashboard</Nav.Link>
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
      </Container>
    </Navbar>

    </div>


      {/* <div className="menus">
        <ul className="menu-items">
          <li>
            <Link style={{textDecoration:'none'}} to="/" onClick={()=>handleMenuClick(0)}>
            <p className={selectedMenu === 0? activeMenuClass : menuClass }>Dashboard</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:'none'}} to="/orders" onClick={()=>handleMenuClick(1)}>
            <p className={selectedMenu===1?  activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:'none'}} to="/holdings" onClick={()=>handleMenuClick(2)}>
            <p className={selectedMenu===2? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:'none'}} to="/positions" onClick={()=>handleMenuClick(3)}>
            <p className={selectedMenu===3? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:'none'}} to="/funds" onClick={()=>handleMenuClick(4)}>
            <p className={selectedMenu===4? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
        </ul>
        <hr />
      </div> */}
        
    </div>
  );
};

export default Menu;