import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary p-4">
        <Container>
          <Link to="" className="text-white fw-bold fs-3 text-decoration-none">
            START FRAMEWORK
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink
                className="nav-link text-white fw-bold text-uppercase rounded-3 me-3"
                to="about"
              >
                About
              </NavLink>
              <NavLink
                className="nav-link text-white fw-bold text-uppercase rounded-3 me-3"
                to="portfolio"
              >
                Portfolio
              </NavLink>
              <NavLink
                className="nav-link text-white fw-bold text-uppercase rounded-3 me-3"
                to="contact"
              >
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
