import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const RoadblockAd = ({ onClose }: { onClose: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 6000);

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="relative bg-white p-4 shadow-lg rounded-lg">
        <button
          className="absolute -top-3 -right-3 bg-white text-red-800 rounded-full w-8 h-8 flex items-center justify-center shadow-md 
  hover:bg-red-800  transition-colors duration-300"
          onClick={() => {
            setIsVisible(false);
            onClose();
          }}
        >
          X
        </button>
        <Link to="#" target="_blank" id="advertisementLink">
          <img
            src="https://www.sriyog.com/roadblock/default.jpg"
            className="w-[500px] h-[500px] object-contain rounded"
            alt="Advertisement"
          />
        </Link>
      </div>
    </div>
  );
};
