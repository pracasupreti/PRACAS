import React from "react";
import { FaMapMarkerAlt, FaCamera } from "react-icons/fa";
import Wallpaper from "../assets/wallpaper.png";

export const Hero = () => {
  return (
    <div className="relative w-full">
      <img
        src={Wallpaper}
        alt="Kanyam | Ilam"
        className="w-full h-[545px] object-cover"
      />

      <div className="absolute inset-0 bg-black" style={{ opacity: 0.3 }}></div>

      <div className="absolute bottom-24 right-[5rem] text-white text-[12px] p-3 rounded-lg flex flex-col ">
        <span className="flex items-center gap-1">
          <FaMapMarkerAlt /> Kanyam | Ilam
        </span>
        <span className="flex items-center gap-1">
          <FaCamera /> Photo Source: © Sashi Shrestha
        </span>
      </div>
    </div>
  );
};
