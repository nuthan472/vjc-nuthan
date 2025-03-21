"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Form from "./Form"; // Adjust path if needed

const countriesData = [
  {
    name: "Germany Work Permit",
    path: "/Workabroad/germany-work-permit",
    image: "/germany.jpg",
  },
  {
    name: "Canada Work Permit",
    path: "/Workabroad/canada-work-permit",
    image: "/canada.webp",
  },
  {
    name: "USA H1b Visa",
    path: "/Workabroad/usa-h1b-visa",
    image: "/usa1.jpg",
  },
  {
    name: "Australia Work Permit",
    path: "/Workabroad/australia-work-permit",
    image: "/australia.jpg",
  },
  {
    name: "UK Work Permit",
    path: "/Workabroad/united-kingdom-work-permit",
    image: "/uk1.webp",
  },
  {
    name: "Denmark Work Permit",
    path: "/Workabroad/denmark-work-permit",
    image: "/de.jpg",
  },
  {
    name: "Dubai Work Permit",
    path: "/Workabroad/dubai-work-permit",
    image: "/du.webp",
  },
];

const Migrate = () => {
  const router = useRouter();
  const scrollRef = useRef(null);
  const [showPopup, setShowPopup] = useState(true);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Popup Form Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 relative"
          >
            <button
              className="absolute top-3 right-4 text-black text-xl font-bold hover:text-red-600"
              onClick={() => setShowPopup(false)}
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4 text-center text-gray-800">
              Apply Now
            </h2>
            <Form />
          </motion.div>
        </div>
      )}

      <main className="w-full bg-white">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full min-h-[80vh] bg-cover bg-center relative flex items-center justify-center"
          style={{ backgroundImage: "url('/harsh.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 text-center text-white px-6">
            <motion.h1
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-4xl lg:text-5xl font-bold mb-4"
            ></motion.h1>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="text-lg lg:text-xl font-medium"
            ></motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute z-20 -bottom-20 sm:bottom-10 md:bottom-14 lg:top-[30%] lg:bottom-auto right-4 w-[90%] lg:w-[700px] lg:h-[500px] bg-gray-800 text-white p-6 lg:p-10"
          >
            <h3 className="text-2xl lg:text-3xl font-bold mb-3">Opportunities Await</h3>
            <p className="text-sm lg:text-base leading-relaxed">
              Apply for Germany, Canada, USA H1B, Australia, UK, Denmark, and Dubai Work Permits with expert support from VJC Overseas. Discover a better career abroad — with step-by-step visa guidance and a smooth application process.
            </p>
          </motion.div>
        </motion.div>

        {/* Cards Carousel Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full mt-24 px-4 lg:px-20 relative"
        >
          <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-6">
            Select Your Work Permit Destination
          </h2>

          <div className="absolute left-2 top-[50%] z-20">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full bg-blue-700 text-white hover:bg-blue-900 shadow-lg"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute right-2 top-[50%] z-20">
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full bg-blue-700 text-white hover:bg-blue-900 shadow-lg"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-6 py-8 no-scrollbar scroll-smooth px-4"
          >
            {countriesData.map((country, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="min-w-[280px] sm:min-w-[300px] max-w-[320px] h-[260px] bg-white bg-text-center border border-gray-200 cursor-pointer relative overflow-hidden"
                onClick={() => router.push(country.path)}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${country.image})` }}
                ></div>
                <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white bg-black/20 ">
                  <h3 className="text-xl text-center mt-24 font-bold ">{country.name}</h3>
                  
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full px-4 lg:px-20 mt-20"
        >
          <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2 min-h-[300px] lg:min-h-[500px] bg-cover bg-center"
              style={{ backgroundImage: "url('/nuthan.jpg')" }}
            />
            <div className="w-full lg:w-1/2">
              <Form />
            </div>
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default Migrate;