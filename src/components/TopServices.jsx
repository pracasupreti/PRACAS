import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import Electrician from "../assets/workCategory/electrician.png";
import Painter from "../assets/workCategory/painter.png";
import Plumber from "../assets/workCategory/plumber.png";
import Carpenter from "../assets/workCategory/carpenter.png";
import Thekedar from "../assets/workCategory/thekedar.png";
import Catering from "../assets/workCategory/catering.png";
import FalseCeiling from "../assets/workCategory/false-ceiling.png";
import Interior from "../assets/workCategory/interior.png";
import Pandit from "../assets/workCategory/pandit.png";

export const TopServices = () => {
  const data = [
    {
      id: 1,
      name: "Electrician",
      img: Electrician,
    },
    {
      id: 2,
      name: "Painter",
      img: Painter,
    },
    {
      id: 3,
      name: "Plumber",
      img: Plumber,
    },
    {
      id: 4,
      name: "Carpenter",
      img: Carpenter,
    },
    {
      id: 5,
      name: "Thekedar",
      img: Thekedar,
    },
    {
      id: 6,
      name: "Catering",
      img: Catering,
    },
    {
      id: 7,
      name: "False Ceiling",
      img: FalseCeiling,
    },
    {
      id: 8,
      name: "Interior",
      img: Interior,
    },
    {
      id: 9,
      name: "Pandit",
      img: Pandit,
    },
  ];

  return (
    <section className="container mt-4">
      <div className="flex justify-center mb-4">
        <span className="font-bold font-roboto text-md text-gray-700">
          Top Services
        </span>
      </div>

      <Row className="align-items-center justify-content-around">
        {data.map((service) => (
          <Col
            key={service.id}
            xs={6}
            sm={4}
            md={3}
            lg={1}
            className="text-center mb-4"
          >
            <div className="sriyog-top-service transition-transform duration-300 ease-in-out hover:scale-[1.20]">
              <Link to="#" className="no-underline group">
                <img
                  src={service.img}
                  alt={`${service.name} Icon`}
                  className="w-9 h-9 mx-auto"
                />
                <span className="text-sm mt-2 block text-gray-800 group-hover:text-red-800 transition-colors duration-200 ease-in-out">
                  {service.name}
                </span>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};
