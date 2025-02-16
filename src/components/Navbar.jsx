import { Navbar, Nav, Container } from "react-bootstrap";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";

import logo from "../assets/logo.png";
import joinNow from "../assets/join-now.png";
import mail from "../assets/mail.png";

export const NavbarComponent = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className="fixed w-full bg-white shadow z-50">
      <Container>
        <Navbar expand="lg" className="py-1 w-full">
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <img src={logo} alt="Logo" className="h-16" />
            <span className="ml-2 text-sm font-roboto">| IME Pay</span>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="navbar-nav"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            className="focus:outline-none shadow-sm"
          >
            <HiMenu className="text-3xl text-gray-700" />
          </Navbar.Toggle>

          <Navbar.Collapse id="navbar-nav" className="justify-start">
            <Nav className="ml-auto space-x-4 text-[13px] font-medium font-roboto">
              <Nav.Link
                href="/"
                className="px-3 hover:text-red-800 transition-colors duration-200"
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="/about"
                className=" hover:text-red-800 transition-colors duration-200"
              >
                About
              </Nav.Link>
              <Nav.Link
                href="/team"
                className="  hover:text-red-800 transition-colors duration-200"
              >
                Team
              </Nav.Link>
              <Nav.Link
                href="/faq"
                className="  hover:text-red-800 transition-colors duration-200"
              >
                FAQ
              </Nav.Link>
              <Nav.Link
                href="/contact"
                className="  hover:text-red-800 transition-colors duration-200"
              >
                Contact
              </Nav.Link>

              <Nav.Link
                href="/join"
                target="_self"
                className="font-semibold font-roboto text-gray-700 hover:text-red-800 transition-colors duration-200"
              >
                <span className="inline-block transition-transform hover:scale-105">
                  <img src={joinNow} alt="Join Now" className="h-9 -mt-2" />
                </span>
              </Nav.Link>

              <Nav.Link
                href="https://mail.yandex.com"
                target="_blank"
                className="font-semibold font-roboto text-gray-700 hover:text-red-800 transition-colors duration-200"
              >
                <span className="inline-block transition-transform hover:scale-105">
                  <img src={mail} alt="Email" className="h-9 -mt-2" />
                </span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};
