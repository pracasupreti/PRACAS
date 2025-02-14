import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

import logo from "../assets/logo.png";
import joinNow from "../assets/join-now.png";
import Mail from "../assets/mail.png";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-10" />
            <span className="text-lg font-semibold text-gray-700">
              | IME Pay
            </span>
          </Link>

          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden focus:outline-none"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Navigation Links */}
          <ul
            className={`lg:flex lg:items-center lg:space-x-6 absolute lg:static left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none p-6 lg:p-0 transition-all duration-300 ease-in-out z-50 ${
              isMenuOpen
                ? "top-16 opacity-100"
                : "-top-[400px] opacity-0 lg:opacity-100 lg:pointer-events-auto"
            }`}
          >
            <li>
              <Link
                to="/"
                className="font-medium text-gray-700 hover:text-red-900 block py-2"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="font-medium text-gray-700 hover:text-red-900 block py-2"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                className="font-medium text-gray-700 hover:text-red-900 block py-2"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="font-medium text-gray-700 hover:text-red-900 block py-2"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="font-medium text-gray-700 hover:text-gray-900 block py-2"
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="https://sriyog.com/join"
                target="_self"
                className="block lg:inline-block py-2 lg:py-0"
              >
                <img
                  src={joinNow}
                  alt="Join Now"
                  className="h-10 transition-transform transform hover:scale-105"
                />
              </a>
            </li>
            <li>
              <a
                href="https://mail.yandex.com"
                target="_blank"
                className="block lg:inline-block py-2 lg:py-0"
              >
                <img
                  src={Mail}
                  alt="Email"
                  className="h-10 transition-transform transform hover:scale-105"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
