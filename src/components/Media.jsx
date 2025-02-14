import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AP1 from "../assets/Media/ap1.png";
import ArthaSarokar from "../assets/Media/artha-sarokar.png";
import Baahrakhari from "../assets/Media/12khari.png";
import Bizshala from "../assets/Media/bizshala.png";
import DeshSanchar from "../assets/Media/deshsanchar.png";
import Kendrabindu from "../assets/Media/kendrabindu.png";
import Nagarik from "../assets/Media/nagarik.png";
import NayaPatrika from "../assets/Media/nayapatrika.png";
import NepalTelevision from "../assets/Media/nepaltelevision.png";
import OnlineKhabar from "../assets/Media/onlinekhabar.png";
import Ratopati from "../assets/Media/ratopati.png";
import Setopati from "../assets/Media/setopati.png";

const mediaInfo = [
  {
    title: "AP1 HD",
    img: AP1,
    link: "https://www.youtube.com/watch?v=BM9yTsfkgb4",
  },
  {
    title: "Artha Sarokar",
    img: ArthaSarokar,
    link: "https://arthasarokar.com/2018/11/sriyog-.html",
  },
  {
    title: "Baahrakhari",
    img: Baahrakhari,
    link: "https://baahrakhari.com/detail/216093",
  },
  {
    title: "Bizshala",
    img: Bizshala,
    link: "https://old.bizshala.com/story/%E0%A4%86%E0%A4%87%E0%A4%8F%E0%A4%AE%E0%A4%88-%E0%A4%AA%E0%A5%87-%E0%A4%B0-13",
  },
  {
    title: "Desh Sanchar",
    img: DeshSanchar,
    link: "https://deshsanchar.com/2023/02/10/761100/",
  },
  {
    title: "Kendrabindu",
    img: Kendrabindu,
    link: "https://kendrabindu.com/others/39670/",
  },
  {
    title: "Nagarik",
    img: Nagarik,
    link: "https://shukrabar.nagariknetwork.com/news/5321",
  },
  {
    title: "Naya Patrika",
    img: NayaPatrika,
    link: "https://nayapatrikadaily.com/news-details/107044/2023-02-09",
  },
  {
    title: "Nepal Television",
    img: NepalTelevision,
    link: "https://www.youtube.com/watch?v=U2YBTuQbAHg",
  },
  {
    title: "Online Khabar",
    img: OnlineKhabar,
    link: "https://www.onlinekhabar.com/2019/01/733498",
  },
  {
    title: "Ratopati",
    img: Ratopati,
    link: "https://www.ratopati.com/story/345665",
  },
  {
    title: "Setopati",
    img: Setopati,
    link: "https://www.setopati.com/kinmel/employment/189754",
  },
];

export const Media = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative container mx-auto py-10 px-4 text-center mt-10">
      <div className="relative flex items-center">
        <button
          onClick={scrollLeft}
          className="absolute left-0 bg-white p-3 rounded-full shadow-lg z-10 hover:bg-gray-200 transition"
        >
          <FaChevronLeft size={24} className="text-gray-700" />
        </button>

        <div
          ref={sliderRef}
          className="flex overflow-x-auto scrollbar-hide space-x-6 px-12"
        >
          {mediaInfo.map((site, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[150px] group"
            >
              <a
                href={site.link}
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition duration-300 hover:scale-110"
                title={site.title}
              >
                <img
                  src={site.img}
                  alt={site.title}
                  className="h-24 w-24 sm:h-32 sm:w-32 object-contain shadow-lg border border-gray-200 rounded-lg hover:shadow-xl transition"
                />
              </a>
              <span className="mt-3 text-sm sm:text-md font-medium text-gray-700 group-hover:text-red-800 transition">
                {site.title}
              </span>
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 bg-white p-3 rounded-full shadow-lg z-10 hover:bg-gray-200 transition"
        >
          <FaChevronRight size={24} className="text-gray-700" />
        </button>
      </div>

      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <div className="w-full pt-7 pb-7 border-b border-gray-300 "></div>
    </div>
  );
};
