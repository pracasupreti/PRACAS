import React from "react";
import Search from "../assets/HowItWorks/search.png";
import Hire from "../assets/HowItWorks/hire.png";
import Instruct from "../assets/HowItWorks/instruct.png";
import Pay from "../assets/HowItWorks/pay.png";

const steps = [
  { title: "Search", image: Search },
  { title: "Hire", image: Hire },
  { title: "Instruct", image: Instruct },
  { title: "Pay", image: Pay },
];

export const HowItWorks = () => {
  return (
    <div className=" flex flex-col items-center py-12 mb-2">
      <h2 className="font-bold font-roboto text-lg text-gray-700">
        How it Works ?
      </h2>

      {/* Steps */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        {steps.map((step, i) => (
          <div key={i} className=" flex flex-col items-center mb-6">
            <div
              className="relative w-[180px] h-[180px] sm:w-44 sm:h-44 md:w-40 md:h-40 lg:w-48 lg:h-48
                flex items-center justify-center rounded-full bg-white 
                border-3 border-blue-200 shadow-xl transition-all"
              style={{ boxShadow: "0px 0px 10px rgba(0, 102, 255, 0.5)" }}
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-[300px] h-[300px] sm:w-30 sm:h-30 md:w-30 md:h-30 object-contain"
              />
            </div>

            <h4 className="text-xl md:text-xl  text-gray-600 mt-4">
              {step.title}
            </h4>
            <div className="w-10 border-t-2 border-gray-300 mt-1"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
