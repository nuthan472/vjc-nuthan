"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Head from "next/head";
import { motion } from "framer-motion";
import { Globe, ArrowRight, X } from "lucide-react";
import Form from "./Form";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const visaData = [
  {
    name: "IELTS Training/Coaching",
    path: "/coaching/ielts-training-couching",
    image: "/ielts-bg.webp",
  },
  {
    name: "PTE Training/Coaching",
    path: "/coaching/pte-training-couching",
    image: "/pte-bg.webp",
  },
  {
    name: "GRE Training/Coaching",
    path: "/coaching/gre-training-couching",
    image: "/gre-bg.webp",
  },
  {
    name: "GMAT Training/Coaching",
    path: "/coaching/gmat-training-couching",
    image: "/gmat-bg.webp",
  },
  {
    name: "TOEFL Training/Coaching",
    path: "/coaching/toefl-training-couching",
    image: "/toefl-bg.webp",
  },
  {
    name: "DUOLINGO Training/Coaching",
    path: "/coaching/duolingo-training-couching",
    image: "/duolingo-bg.webp",
  },
];

const defaultVisa = {
  name: "Job Seeker Visa",
  image: "/7.webp",
};

const Migrate = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [selectedVisa, setSelectedVisa] = useState(defaultVisa);
  const [hoveredVisa, setHoveredVisa] = useState(null);
  const [showFormPopup, setShowFormPopup] = useState(true);

  useEffect(() => {
    const foundVisa = visaData.find((visa) => visa.path === pathname);
    setSelectedVisa(foundVisa || defaultVisa);
  }, [pathname]);

  const handleVisaClick = (visa) => {
    setSelectedVisa(visa);
    router.push(visa.path);
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const backgroundImage = hoveredVisa?.image || selectedVisa?.image || defaultVisa.image;
  const displayHeading = hoveredVisa?.name || selectedVisa?.name || "Explore Visit Visas";

  return (
    <>
      <Head>
        <title>Visit Visas - VJC Overseas</title>
        <meta
          name="description"
          content="Apply for USA, Canada, Australia, UK, Schengen and other Visit Visas with expert guidance from VJC Overseas."
        />
        <link rel="canonical" href="https://www.vjcoverseas.com/visitvisas" />
      </Head>

      <div className="w-full min-h-screen bg-white text-black">
        {/* TOP SECTION WITH DYNAMIC BACKGROUND */}
        <div className="relative">
          <img
            src={backgroundImage}
            alt="Visa Background"
            className="w-full h-[70vh] object-cover brightness-75 transition-all duration-500"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg transition-all duration-300"
            >
              {displayHeading}
            </motion.h1>
            <p className="text-lg text-gray-200 mt-4 max-w-xl">
              Choose your destination and begin your journey with VJC Overseas.
            </p>
          </div>
        </div>

        {/* SLIDER SECTION */}
        <div className="relative -mt-24 z-10 px-6 md:px-12">
          <Slider {...sliderSettings}>
            {visaData.map((visa, index) => (
              <motion.div
                key={visa.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="px-2"
              >
                <div
                  className="bg-gray-700 border border-gray-700 p-4 h-36 rounded-xl hover:bg-orange-500 shadow-lg hover:shadow-orange-500/40 transition hover:scale-105 cursor-pointer flex flex-col justify-between"
                  onClick={() => handleVisaClick(visa)}
                  onMouseEnter={() => setHoveredVisa(visa)}
                  onMouseLeave={() => setHoveredVisa(null)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Globe className="text-orange-400 w-5 h-5" />
                      <h3 className="text-sm font-semibold text-white">{visa.name}</h3>
                    </div>
                    <ArrowRight className="text-gray-300 w-4 h-4" />
                  </div>
                  <p className="text-xs text-white mt-3">
                    Click to learn more about {visa.name}.
                  </p>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>

        {/* CONTENT SECTION */}
        <div className="bg-white text-black mt-20 px-6 md:px-12 py-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <motion.h2
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-3xl font-bold mb-6"
              >
                Why Choose VJC Overseas?
              </motion.h2>
              <ul className="text-gray-800 space-y-4 text-lg list-disc list-inside">
                <li>Expert Guidance for Every Visa Type</li>
                <li>Personalized Application Support</li>
                <li>Strong Global Network</li>
                <li>Years of Trusted Experience</li>
                <li>End-to-End Assistance</li>
              </ul>
            </div>
            <div className="border-gray-200">
              <Form />
            </div>
          </div>
        </div>
      </div>

      {/* POPUP FORM */}
      {showFormPopup && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-2xl shadow-2xl p-6 sm:p-10 max-w-xl w-full animate-fadeIn">
            <button
              onClick={() => setShowFormPopup(false)}
              className="absolute top-4 right-4 text-gray-700 hover:text-red-600 transition"
            >
              <X className="w-6 h-6" />
            </button>
            <Form />
          </div>
        </div>
      )}
    </>
  );
};

export default Migrate;
