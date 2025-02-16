import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelopeOpen } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

import JoinNow from "../assets/foooter/join-now.png";
import Mail from "../assets/foooter/mail.png";
import Logo from "../assets/foooter/logo.svg";
import Missedcall from "../assets/foooter/missed-call.svg";
import Whatsapp from "../assets/foooter/whatsapp.svg";
import Viber from "../assets/foooter/viber.svg";
import footer from "../assets/foooter/footer.png";
import AppStore from "../assets/foooter/app-store.png";
import PlayStore from "../assets/foooter/play-store.png";
import TelgramB from "../assets/foooter/telegramBlack.svg";

export const Footer = () => {
  return (
    <footer className="w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-3/4 mt-[190px]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[12px] font-roboto text-gray-500">
              <div className="mb-4">
                <a
                  href="/about"
                  className="d-block text-gray-700 mb-2 hover:text-red-800 transition-colors duration-200"
                  style={{ textDecoration: "none" }}
                >
                  About Us
                </a>
                <a
                  href="/how"
                  className="d-block text-gray-700 mb-2 hover:text-red-800 transition-colors duration-200"
                  style={{ textDecoration: "none" }}
                >
                  How It Works
                </a>
                <a
                  href="/team"
                  className="d-block text-gray-700 mb-2 hover:text-red-800 transition-colors duration-200"
                  style={{ textDecoration: "none" }}
                >
                  Team
                </a>
                <a
                  href="/press"
                  className="d-block text-gray-700 mb-2 hover:text-red-800 transition-colors duration-200"
                  style={{ textDecoration: "none" }}
                >
                  Press
                </a>
                <a
                  href="/career"
                  className="d-block text-gray-700 mb-2 flex items-center hover:text-red-800 transition-colors duration-200"
                  style={{ textDecoration: "none" }}
                >
                  Career{" "}
                  <span className="badge bg-red-800 text-white ml-2">
                    We're Hiring
                  </span>
                </a>
              </div>

              <div className="mb-4">
                <a
                  href="/vmgo"
                  className="d-block text-gray-700 mb-2 hover:text-red-800 transition-colors duration-200"
                  style={{ textDecoration: "none" }}
                >
                  Mission / Vision
                </a>
                <a
                  href="/video"
                  className="d-block text-gray-700 mb-2 hover:text-red-800 transition-colors duration-200"
                  style={{ textDecoration: "none" }}
                >
                  Video
                </a>
                <a
                  href="/faq"
                  className="d-block text-gray-700 mb-2 hover:text-red-800 transition-colors duration-200"
                  style={{ textDecoration: "none" }}
                >
                  FAQ/KnowBase
                </a>
                <a
                  href="/welcome"
                  className="d-block text-gray-700 mb-2 hover:text-red-800 transition-colors duration-200"
                  style={{ textDecoration: "none" }}
                >
                  Welcome
                </a>
                <a
                  href="/media"
                  className="d-block text-gray-700 mb-2 hover:text-red-800 transition-colors duration-200"
                  style={{ textDecoration: "none" }}
                >
                  Media Coverage
                </a>
              </div>

              <div className="mb-4">
                <a
                  href="/feedback"
                  className="d-block text-gray-700 mb-2 hover:text-red-800 transition-colors duration-200"
                  style={{ textDecoration: "none" }}
                >
                  Feedback
                </a>
                <a
                  href="/timeline"
                  className="d-block text-gray-700 mb-2 hover:text-red-800 transition-colors duration-200"
                  style={{ textDecoration: "none" }}
                >
                  Timeline
                </a>
                <a
                  href="/features"
                  className="d-block text-gray-700 mb-2 hover:text-red-800 transition-colors duration-200"
                  style={{ textDecoration: "none" }}
                >
                  Feature
                </a>
                <a
                  href="/services"
                  className="d-block text-gray-700 mb-2 hover:text-red-800 transition-colors duration-200"
                  style={{ textDecoration: "none" }}
                >
                  Services
                </a>
                <a
                  href="/city"
                  className="d-block text-gray-700 mb-2 hover:text-red-800 transition-colors duration-200"
                  style={{ textDecoration: "none" }}
                >
                  Cities
                </a>
              </div>

              <div className="mb-4">
                <a
                  href="https://sriyog.com/join"
                  className="d-block mb-2 hover:text-red-800 transition-colors duration-200"
                >
                  <img src={JoinNow} width={64} height={24} alt="Join Now" />
                </a>
                <a
                  href="https://mail.yandex.com"
                  className="d-block mb-2 hover:text-red-800 transition-colors duration-200"
                >
                  <img src={Mail} width={45} height={24} alt="Access Email" />
                </a>
                <a
                  href="/privacy"
                  className="d-block text-gray-700 mb-2 hover:text-red-800 transition-colors duration-200"
                  style={{ textDecoration: "none" }}
                >
                  Privacy Policy
                </a>
                <a
                  href="/tos"
                  className="d-block text-gray-700 mb-2 hover:text-red-800 transition-colors duration-200"
                  style={{ textDecoration: "none" }}
                >
                  Terms of Services
                </a>
                <a
                  href="/sitemap.xml"
                  className="d-block text-gray-700 mb-2 hover:text-red-800 transition-colors duration-200"
                  style={{ textDecoration: "none" }}
                >
                  Sitemap
                </a>
              </div>
            </div>
          </div>

          {/* Card Section */}
          <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0 mt-4">
            <div className="bg-red-800 h-1 w-full"></div>
            <div className="flex flex-col p-4 bg-white shadow-lg relative">
              <img
                src={Logo}
                alt="Footer Contact"
                className="w-50 mt-1 mx-auto"
              />
              <ul className="list-none p-0 mt-3">
                <li className="mb-2 flex items-start">
                  <FaMapMarkerAlt className="mr-2 mt-1 flex-shrink-0" />
                  <span>Rem.Work, Kamalpokhari, Kathmandu, Nepal</span>
                </li>
                <li className="mb-2">
                  <div className="flex items-center">
                    <FaPhoneAlt className="mr-2 flex-shrink-0" />
                    +977-9852025735
                  </div>
                  <small className="block text-red-700">
                    Calling Time: 10 AM to 5 PM NPT
                  </small>
                </li>
                <li className="mb-2 text-black">
                  <a
                    href="mailto:info@sriyog.com"
                    className="flex items-center text-gray-700 hover:text-red-900 no-underline"
                  >
                    <FaEnvelopeOpen className="mr-2 flex-shrink-0" />
                    <span>info@sriyog.com</span>
                  </a>
                </li>
                <li className="mb-2 flex items-center space-x-2">
                  <img src={TelgramB} alt="Telegram Icon" className="w-6 h-6" />
                  <img src={Viber} alt="Viber Icon" className="w-6 h-6" />
                  <img src={Whatsapp} alt="WhatsApp Icon" className="w-6 h-6" />
                  <span>+977-9852024365</span>
                </li>
              </ul>
              <div className="flex items-center">
                <img src={Missedcall} alt="Misscall" className="mr-2 w-8 h-8" />
                <a
                  href="tel:+9779852024365"
                  className="text-gray-600 flex items-center no-underline"
                >
                  <span className="font-bold">
                    +977-98520 <span className="text-xl">24-365</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img className="w-full" src={footer} alt="footer" />
      <div className="bg-black h-7 w-full"></div>

      {/* Bottom Footer */}
      <div className="footer-bottom bg-gray-100 py-[10px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-1 md:space-y-0">
            <div className="copyright text-center md:text-left mb-1 ml-7">
              <small className="text-gray-600 text-[12px] font-roboto">
                All Rights Reserved. &copy; {new Date().getFullYear()} Sriyog
                Consulting Pvt. Ltd. | Powered By Microsoft For Startups
              </small>
            </div>

            <div className=" flex space-x-2 ml-5">
              <a
                href="https://play.google.com/store/apps/details?id=com.pracasinfosys.sriyog.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
                aria-label="Get it on Google Play"
              >
                <img
                  className="h-7 w-auto"
                  src={PlayStore}
                  alt="Google Play Image"
                />
              </a>
              <a
                href="https://bit.ly/sriyogios"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
                aria-label="Download on the App Store"
              >
                <img
                  className="h-7 w-auto"
                  src={AppStore}
                  alt="App Store Image"
                />
              </a>
            </div>

            {/* Social Icons */}
            <div className="follow-us share">
              <div className="social-share flex space-x-3">
                <a
                  href="https://t.me/sriyogdotcom"
                  target="_blank"
                  title="Opens in a new window"
                >
                  <img
                    src={TelgramB}
                    alt="Telegram Icon"
                    width="20"
                    height="20"
                  />
                </a>
                <a
                  href="https://www.facebook.com/sriyogdotcom"
                  target="_blank"
                  title="Opens in a new window"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 30 30"
                  >
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/thesriyog"
                  target="_blank"
                  title="Opens in a new window"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/sriyog-consulting/"
                  target="_blank"
                  title="Opens in a new window"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 50 50"
                  >
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@sriyogdotcom8535"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 30 30"
                  >
                    <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red-900 h-1 w-full"></div>
    </footer>
  );
};
