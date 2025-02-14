import React from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="relative w-full">
      <div className="relative w-full max-h-[700px] overflow-hidden">
        <img
          src="https://sriyog.com/images/home/wallpaper/wallpaper.jpg"
          alt="Kanyam, Ilam"
          className="w-full h-[520px] lg:h-[500px] object-cover"
        />
        <div className="absolute bottom-4 right-4 bg-white bg-opacity-70 p-3 rounded-lg shadow-md">
          <span className="flex items-center text-sm font-semibold">
            📌 Kanyam | Ilam
          </span>
          <span className="flex items-center text-xs mt-1">
            📷 Photo Source:
            <Link to="#" className="ml-1 text-black font-medium">
              &copy; Sashi Shrestha
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
