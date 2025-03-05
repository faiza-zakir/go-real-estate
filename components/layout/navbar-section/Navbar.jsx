"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Container,
  Offcanvas,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
// css
import "./style.scss";
import TopBar from "./TopBar";

const MainNavbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeToggler = () => {
    setShowOffcanvas(false); // Use state to control the visibility of the Offcanvas
  };

  return (
    <>
      <TopBar />
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`navbar-area ${scrolled ? "sticky-top" : "fixed-top"}`}
      >
        <Container>
          <Navbar.Brand as={Link} href="/">
            <Image
              src={
                scrolled
                  ? "/assets/logo/logo.svg"
                  : "/assets/logo/blacklogo.svg"
              }
              alt="logo"
              width={60}
              height={60}
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar-expand-lg"
            onClick={() => setShowOffcanvas(true)} // Open the offcanvas on click
          />
          <Navbar.Offcanvas
            show={showOffcanvas}
            onHide={closeToggler} // Close on hide
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                <Image
                  src="/assets/logo/blacklogo.svg"
                  alt="logo"
                  width={60}
                  height={60}
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="ms-auto">
                <Nav.Link
                  onClick={closeToggler}
                  as={Link}
                  href="/"
                  className={`nav-item ${pathname === "/" ? "active" : ""}`}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  onClick={closeToggler}
                  as={Link}
                  href="/about"
                  className={`nav-item ${
                    pathname === "/about" ? "active" : ""
                  }`}
                >
                  About Us
                </Nav.Link>
                <NavDropdown
                  title="Real Estate Investments in UAE"
                  id="about-dropdown"
                  className="about_dropdown"
                >
                  <NavDropdown.Item
                    as={Link}
                    onClick={closeToggler}
                    href="/dubai-opportunities"
                    className={`nav-drop-link ${
                      pathname === "/dubai-opportunities" ? "active" : ""
                    }`}
                  >
                    Dubai Opportunities <FaAngleRight className="angle-arrow" />
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    onClick={closeToggler}
                    href="/abu-dhabi-opportunities"
                    className={`nav-drop-link ${
                      pathname === "/abu-dhabi-opportunities" ? "active" : ""
                    }`}
                  >
                    Abu Dhabi Opportunities
                    <FaAngleRight className="angle-arrow" />
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    onClick={closeToggler}
                    href="/ras-al-khaimah-opportunities"
                    className={`nav-drop-link ${
                      pathname === "/ras-al-khaimah-opportunities"
                        ? "active"
                        : ""
                    }`}
                  >
                    Ras Al Khaimah Opportunities
                    <FaAngleRight className="angle-arrow" />
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link
                  onClick={closeToggler}
                  as={Link}
                  href="/go-community"
                  className={`nav-item ${
                    pathname === "/go-community" ? "active" : ""
                  }`}
                >
                  GO Community
                </Nav.Link>
                <Nav.Link
                  onClick={closeToggler}
                  as={Link}
                  href="/careers"
                  className={`nav-item ${
                    pathname === "/careers" ? "active" : ""
                  }`}
                >
                  Careers
                </Nav.Link>
                <Nav.Link
                  onClick={closeToggler}
                  as={Link}
                  href="/contact"
                  className={`nav-item ${
                    pathname === "/contact" ? "active" : ""
                  }`}
                >
                  Contact Us
                </Nav.Link>
                <Nav.Link
                  onClick={closeToggler}
                  as={Link}
                  href="/go-partners"
                  className={`nav-item ${
                    pathname === "/go-partners" ? "active" : ""
                  }`}
                >
                  GO Partners
                </Nav.Link>
                <Nav.Link
                  onClick={closeToggler}
                  as={Link}
                  href="/login"
                  className={`nav-item theme_btn ${
                    pathname === "/login" ? "active" : ""
                  }`}
                >
                  Log In
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNavbar;
