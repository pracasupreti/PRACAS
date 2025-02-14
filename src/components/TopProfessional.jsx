import React from "react";
import Ghanashyam from "../assets/workersPhoto/1.png";
import Kripanand from "../assets/workersPhoto/2.png";
import Bharat from "../assets/workersPhoto/3.png";
import Santosh from "../assets/workersPhoto/4.png";

export const TopProfessional = () => {
  const users = [
    {
      id: 1,
      user: "Gahanashyam Timsina",
      profession: "Pandit",
      address: "Biratnagar",
      img: Ghanashyam,
    },
    {
      id: 2,
      user: "Ramesh Ghimire",
      profession: "Painter",
      address: "Biratnagar",
      img: Kripanand,
    },
    {
      id: 3,
      user: "Ram Bhahadur",
      profession: "Tailoring",
      address: "Biratnagar",
      img: Bharat,
    },
    {
      id: 4,
      user: "Surya Ghimire",
      profession: "Plumber",
      address: "Biratnagar",
      img: Santosh,
    },
  ];

  return (
    <div className="container pt-10 pb-10 mt-10 sm:px-6 lg:px-8">
      <div className="flex justify-center mb-10">
        <h2 className="text-xl font-bold text-gray-700">Top Professionals</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
        {users.map((pro) => (
          <div
            key={pro.id}
            className="card p-4 bg-white shadow-md rounded-lg text-center transform transition duration-300 hover:scale-105"
          >
            <div className="flex justify-center">
              <img
                src={pro.img}
                alt={pro.user}
                className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full border-4 border-gray-200"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-700">
                {pro.user}
              </h3>
              <p className="text-sm mt-2 text-gray-600">
                <span className="font-medium text-gray-800">
                  {pro.profession} &gt;{" "}
                </span>
                {pro.address}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
