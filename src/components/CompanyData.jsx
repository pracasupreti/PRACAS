import React from "react";

export const CompanyData = () => {
  return (
    <div className="bg-gray-100 py-14 w-full mt-[110px] gap-4">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-6 col-md-4 col-lg-2 mb-4">
            <div className="d-flex flex-column align-items-center">
              <span className="text-3xl font-bold text-red-900">
                29,000<sup className="text-sm">+</sup>
              </span>
              <span className="text-lg font-semibold text-gray-700">
                Professionals
              </span>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2 mb-4">
            <div className="d-flex flex-column align-items-center">
              <span className="text-3xl font-bold text-red-900">18</span>
              <span className="text-lg font-semibold text-gray-700">
                Categories
              </span>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2 mb-4">
            <div className="d-flex flex-column align-items-center">
              <span className="text-3xl font-bold text-red-900">168</span>
              <span className="text-lg font-semibold text-gray-700">
                Sub-Categories
              </span>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2 mb-4">
            <div className="d-flex flex-column align-items-center">
              <span className="text-3xl font-bold text-red-900">
                37<sup className="text-sm">+</sup>
              </span>
              <span className="text-lg font-semibold text-gray-700">
                Verified Pro
              </span>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2 mb-4">
            <div className="d-flex flex-column align-items-center">
              <span className="text-3xl font-bold text-red-900">
                1000<sup className="text-sm">+</sup>
              </span>
              <span className="text-lg font-semibold text-gray-700">
                Success Stories
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
