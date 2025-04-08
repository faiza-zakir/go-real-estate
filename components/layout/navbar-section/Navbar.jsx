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
// import Login from "@/components/common/auth/login/Login";

const MainNavbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  // const [showLoginModal, setShowLoginModal] = useState(false);
  // const [authToken, setAuthToken] = useState(null);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const token = localStorage.getItem("auth_token");
  //     setAuthToken(token);
  //   }
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
      setShowDropdown(false); // Hide dropdown on scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeToggler = () => {
    setShowOffcanvas(false); // Use state to control the visibility of the Offcanvas
  };

  // const handleLogout = () => {
  //   if (typeof window !== "undefined") {
  //     localStorage.removeItem("auth_token");
  //     setAuthToken(null);
  //     window.location.reload(); // Reload page when token is added or removed
  //   }
  // };

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
                  ? "/assets/logo/blacklogo.svg"
                  : "/assets/logo/blacklogo.svg"
              }
              alt="GO logo"
              width={60}
              height={60}
              // style={{
              //   background: "#fff",
              //   borderRadius: "5px",
              //   padding: "0.2rem",
              // }}
            />
          </Navbar.Brand>
          <div className="d-flex align-items-center gap-3">
            {/* {authToken ? (
              <Nav.Link
                as={Link}
                href="#"
                onClick={handleLogout}
                className="nav-item theme_btn form_mobile_view"
              >
                Log Out
              </Nav.Link>
            ) : (
              <>
                {(pathname === "/go-partners" || pathname === "/") && (
                  <Nav.Link
                    as={Link}
                    href="#"
                    onClick={() => setShowLoginModal(true)}
                    className="nav-item theme_btn form_mobile_view"
                  >
                    Log In
                  </Nav.Link>
                )}
              </>
            )} */}

            <Navbar.Toggle
              aria-controls="offcanvasNavbar-expand-lg"
              onClick={() => setShowOffcanvas(true)} // Open the offcanvas on click
            />
          </div>
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
                  alt="GO logo"
                  width={60}
                  height={60}
                  // style={{
                  //   background: "#fff",
                  //   borderRadius: "5px",
                  //   padding: "0.2rem",
                  // }}
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
                <div
                  className="nav-item real-estate-wrapper form_desktop_view"
                  onMouseEnter={() => setShowDropdown(true)}
                >
                  <Nav.Link
                    as={Link}
                    href="/real-estate-investments-in-uae"
                    className={`nav-item p-0 ${
                      pathname === "/real-estate-investments-in-uae"
                        ? "active"
                        : ""
                    }`}
                  >
                    Real Estate Investments in UAE
                  </Nav.Link>
                  <NavDropdown
                    show={showDropdown}
                    title=""
                    id="about-dropdown"
                    className="about_dropdown"
                    onMouseLeave={() => setShowDropdown(false)}
                  >
                    <NavDropdown.Item
                      as={Link}
                      onClick={closeToggler}
                      href="/dubai-opportunities"
                      className={`nav-drop-link ${
                        pathname === "/dubai-opportunities" ? "active" : ""
                      }`}
                    >
                      Dubai Opportunities{" "}
                      <FaAngleRight className="angle-arrow" />
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
                </div>
                <div className="form_mobile_view">
                  <NavDropdown
                    title="Real Estate Investments in UAE"
                    id="about-dropdown"
                    className="about_dropdown"
                  >
                    <NavDropdown.Item
                      as={Link}
                      onClick={closeToggler}
                      href="/real-estate-investments-in-uae"
                      className={`nav-drop-link ${
                        pathname === "/real-estate-investments-in-uae"
                          ? "active"
                          : ""
                      }`}
                    >
                      Real Estate Investments in UAE{" "}
                      <FaAngleRight className="angle-arrow" />
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      onClick={closeToggler}
                      href="/dubai-opportunities"
                      className={`nav-drop-link ${
                        pathname === "/dubai-opportunities" ? "active" : ""
                      }`}
                    >
                      Dubai Opportunities{" "}
                      <FaAngleRight className="angle-arrow" />
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
                </div>
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
                {/* {authToken ? (
                  <Nav.Link
                    as={Link}
                    href="#"
                    onClick={handleLogout}
                    className="nav-item theme_btn form_desktop_view"
                  >
                    Log Out
                  </Nav.Link>
                ) : (
                  <>
                    {(pathname === "/go-partners" || pathname === "/") && (
                      <>
                        <Nav.Link
                          as={Link}
                          href="#"
                          onClick={() => setShowLoginModal(true)}
                          className="nav-item theme_btn form_desktop_view"
                        >
                          Log In
                        </Nav.Link>
                        <Login
                          show={showLoginModal}
                          handleClose={() => setShowLoginModal(false)}
                        />
                      </>
                    )}
                  </>
                )} */}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNavbar;
