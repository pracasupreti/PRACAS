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
    <div className="py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-bold text-gray-800 mb-10">How it Works?</h2>
        <div className="flex justify-center flex-wrap gap-14">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 
                rounded-full bg-white border-2 border-blue-400 
                flex items-center justify-center
                shadow-lg transition-all duration-300"
                style={{
                  boxShadow: "0 4px 10px rgba(0, 102, 255, 0.3)",
                  border: "2px solid rgba(0, 102, 255, 0.6)",
                }}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-30 h-30 sm:w-30 sm:h-30 md:w-35 md:h-35 object-contain"
                />
              </div>

              <h4 className="text-xl font-semibold text-gray-700 mt-4">
                {step.title}
              </h4>
              <div className="w-10 border-t-2 border-gray-300 mt-1"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
