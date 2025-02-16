import React from "react";

import Ghanashyam from "../assets/workersPhoto/1.png";
import Kripanand from "../assets/workersPhoto/2.png";
import Bharat from "../assets/workersPhoto/3.png";
import Santosh from "../assets/workersPhoto/4.png";

export const TopProfessional = () => {
  const users = [
    {
      id: 1,
      user: "Ghanashyam Timsina",
      profession: "Pandit",
      address: "Biratnagar",
      img: Ghanashyam,
    },
    {
      id: 2,
      user: "Kripanand Kamat",
      profession: "Painter",
      address: "Biratnagar",
      img: Kripanand,
    },
    {
      id: 3,
      user: "Bharat Sunam",
      profession: "Tailoring",
      address: "Biratnagar",
      img: Bharat,
    },
    {
      id: 4,
      user: "Santosh Ghimire",
      profession: "Plumber",
      address: "Biratnagar",
      img: Santosh,
    },
  ];

  return (
    <section className="container mx-auto pt-10 pb-10 px-5 mt-3">
      <div className="flex justify-center mb-8">
        <h2 className="text-lg font-roboto font-bold text-gray-700">
          Top Professionals
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[90px] mx-auto">
        {users.map((pro) => (
          <div
            key={pro.id}
            className="bg-white shadow-lg rounded-xl p-6 text-center w-[250px] mx-auto"
          >
            <div className="flex justify-center">
              <div className="w-48 h-48 rounded-full overflow-hidden">
                <img
                  src={pro.img}
                  alt={pro.user}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {pro.user}
              </h3>
              <p className="text-[13px] text-gray-600 mt-2">
                <span className="text-gray-600">{pro.profession} &gt; </span>
                {pro.address}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
