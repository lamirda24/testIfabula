import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const Header = () => {
  const [menu, setMenu] = useState([
    {
      id: 1,
      name: "Home",
      routes: "/",
    },
    {
      id: 2,
      name: "New Post",
      routes: "/create",
    },
  ]);
  return (
    <>
      <div>
        <Navbar
          style={{
            background: "#002eb4",
          }}
          variant="dark"
        >
          <Container fluid>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <Outlet />
    </>
  );
};

export default Header;
