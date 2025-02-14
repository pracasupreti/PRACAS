import React from "react";

export const CompanyData = () => {
  return (
    <div className="bg-gray-100 py-14 w-full mt-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6 text-center">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-red-800">
              29,000<sup className="text-sm">+</sup>
            </span>
            <span className="text-lg font-semibold text-gray-800">
              Professionals
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-red-800">18</span>
            <span className="text-lg font-semibold text-gray-800">
              Categories
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-red-800">168</span>
            <span className="text-lg font-semibold text-gray-800">
              Sub-Categories
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-red-800">
              37<sup className="text-sm">+</sup>
            </span>
            <span className="text-lg font-semibold text-gray-800">
              Verified Pro
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-red-800">
              1000<sup className="text-sm">+</sup>
            </span>
            <span className="text-lg font-semibold text-gray-800">
              Success Stories
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
