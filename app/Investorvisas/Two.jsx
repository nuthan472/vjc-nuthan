"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Form from "./Form"; // Adjust path if necessary
import Footer from "./Footer";

const Migrate = () => {
  const router = useRouter();
  const backgroundImage = "/.webp";

  // Country array
  const countries = ["Invest", "Cyprus", "Greece", "Ireland", "Malta", "Portugal"];

  // Background images for buttons
  const countryImages = {
    Invest: "/investors/invest.webp",
    Cyprus: "/investors/cyprus.webp",
    Greece: "/investors/greece.webp",
    Ireland: "/ireland.webp",
    Malta: "/investors/malta.webp",
    Portugal: "/pr.png",
  };

  return (
    <div className="relative w-full flex flex-col items-center text-white px-4 sm:px-6 md:px-10 py-10 bg-white">
      
      {/* Background Image with Text Overlay */}
      <div
        className="absolute w-full h-[500px] sm:h-[600px] md:h-[800px] flex items-center justify-center bg-cover bg-center -mt-6"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

   {/* Country Selection Buttons */}
<div className="relative z-10 mt-64 sm:mt-72 md:mt-80 w-full max-w-6xl flex flex-col md:grid md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
  {countries.map((country, index) => (
    <Link key={index} href={`/migrate/${country.toLowerCase()}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full md:w-44 md:h-52 flex items-center justify-center bg-cover bg-center text-white font-bold text-lg rounded-lg shadow-lg cursor-pointer transition-all p-6"
        style={{
          backgroundImage: `url(${countryImages[country]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {country}
      </motion.div>
    </Link>
  ))}
</div>

      {/* Image on Left, Text on Right */}
      <div className="relative z-10 mt-16 sm:mt-20 flex flex-col md:flex-row items-center w-full max-w-6xl">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start px-4 sm:px-6">
          <Image 
            src="/investimg.jpg" 
            alt="Migration Image" 
            width={600} 
            height={400} 
            className="md:-ml-14 w-[90%] sm:w-[80%] md:w-auto"
          />
        </div>
        
        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 text-gray-800 px-4 sm:px-6 py-6 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl text-orange-500 font-bold mb-4"> VJC Overseas</h2>
          <p className="text-lg mb-4">
          we specialize in turning migration dreams into reality. Whether you're planning to invest, work, or settle overseas, our expert team provides end-to-end support with visa assistance, country selection, and personalized migration strategies tailored to your profile.
          </p>
          <p className="text-lg">
          Global Visions. Trusted Guidance
          </p>
          <p className="text-lg">
          Your Bridge to a Brighter Future
          </p>
          <p className="text-lg">
          Seamless Migration Starts with VJC Overseas.
          </p>
          <div className="flex justify-center md:justify-start mt-8">
            <button className="w-32 h-12 sm:h-14 bg-gradient-to-tr from-orange-600 to-black/20 text-white font-semibold rounded-lg">
              Know More
            </button>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="mt-16 sm:mt-20 w-full px-4 sm:px-6">
        <Form/>
      </div>
    </div>
  );
};

export default Migrate;
