import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import { Hero } from "../components/Hero";
import { TopServices } from "../components/TopServices";
import { TopProfessional } from "../components/TopProfessional";
import { HowItWorks } from "../components/HowItWorks";
import { CompanyData } from "../components/CompanyData";
import { Media } from "../components/Media";
import { Footer } from "../components/Footer";
import { RoadblockAd } from "../components/RoadblockAd";
import { Link } from "react-router-dom";

export const Homepage = () => {
  const [isAdVisible, setIsAdVisible] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {isAdVisible ? (
        <RoadblockAd onClose={() => setIsAdVisible(false)} />
      ) : (
        <>
          <Hero />
          <TopServices />
          <TopProfessional />
          <HowItWorks />
          <CompanyData />
          <Media />

          <section className="container-fluid pt-5 pb-5 border-bottom border-gray-300"></section>
          <Footer />
          <Link
            to="https://wa.me/9779852024365?text=Hi%2C%20I%27m%20contacting%20you%20through%20www.sriyog.com.%20"
            className="fixed bottom-8 right-8 bg-green-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </Link>
        </>
      )}
    </div>
  );
};
