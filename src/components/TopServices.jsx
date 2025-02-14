import React from "react";
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
    <div className="container py-10">
      <div className="flex justify-center mb-7">
        <span className="text-xl font-bold text-gray-700">Top Services</span>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-11">
          {data.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center transition-transform duration-300 transform hover:scale-105"
            >
              <Link to="#" className="text-center hover:text-red-900">
                <img
                  src={service.img}
                  alt={`${service.name} Icon`}
                  className="h-10 w-10 sm:h-12 sm:w-12 object-contain mx-auto"
                />
                <span className="mt-2 text-xs sm:text-sm font-medium">
                  {service.name}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
