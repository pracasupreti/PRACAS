import React from "react";
import { Hero } from "../components/Hero";
import { TopServices } from "../components/TopServices";
import { TopProfessional } from "../components/TopProfessional";
import { HowItWorks } from "../components/HowItWorks";
import { CompanyData } from "../components/CompanyData";
import { Media } from "../components/Media";
import { Footer } from "../components/Footer";

export const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Hero />
      <TopServices />
      <TopProfessional />
      <HowItWorks />
      <CompanyData />
      <Media />
      <Footer />
    </div>
  );
};
