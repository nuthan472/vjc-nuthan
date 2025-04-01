"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Head from "next/head";
import { motion } from "framer-motion";
import Form from "./Form";
import { X } from "lucide-react";

const visaData = [
  { name: "Germany Job Seeker Visa", path: "/Jobseeker/germany-jobseeker-visa" },
  { name: "Austria Job Seeker Visa", path: "/Jobseeker/austria-jobseeker-visa" },
  { name: "Portugal Job Seeker Visa", path: "/Jobseeker/portugal-jobseeker-visa" },
  { name: "Sweden Job Seeker Visa", path: "/Jobseeker/sweden-jobseeker-visa" },
  { name: "Norway Job Seeker Visa", path: "/Jobseeker/norway-jobseeker-visa" },
  { name: "UAE Job Seeker Visa", path: "/Jobseeker/uae-jobseeker-visa" },
];

const defaultVisa = {
  name: "Job Seeker Visa",
  image: "/girl.png",
};

const Migrate = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [selectedVisa, setSelectedVisa] = useState(defaultVisa);
  const [hoveredVisa, setHoveredVisa] = useState(defaultVisa);
  const [showButtons, setShowButtons] = useState(false);
  const [showFormPopup, setShowFormPopup] = useState(true);

  useEffect(() => {
    const foundVisa = visaData.find((visa) => visa.path === pathname);
    setSelectedVisa(foundVisa || defaultVisa);
  }, [pathname]);

  useEffect(() => {
    const timer = setTimeout(() => setShowButtons(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleVisaClick = (visa) => {
    setSelectedVisa(visa);
    router.push(visa.path);
  };

  return (
    <>
      <Head>
        <title>Job Seeker Visas - VJC Overseas</title>
        <meta
          name="description"
          content="Apply for Germany, Austria, Portugal, Sweden, Norway, and UAE Job Seeker Visas with expert guidance from VJC Overseas."
        />
        <meta
          name="keywords"
          content="Germany Job Seeker Visa, Austria Visa, Portugal Job Visa, Sweden Job Visa, UAE Job Visa, Norway Work Visa"
        />
        <link rel="canonical" href="https://www.vjcoverseas.com/Jobseeker" />
      </Head>

      <div className="w-full min-h-screen bg-gradient-to-r from-orange-400 to-white text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT SECTION - Image */}
          <div className="space-y-6">
            <motion.img
              src={hoveredVisa.image || selectedVisa.image || defaultVisa.image}
              alt={hoveredVisa.name || "Visa Image"}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="rounded-xl w-full h-auto max-h-[600px] object-cover"
            />
          </div>

          {/* RIGHT SECTION - Visa Buttons */}
          <div className="flex flex-col space-y-10 center justify-start lg:ml-36 mt-10 sm:mt-16">
            {showButtons &&
              visaData.map((visa, index) => {
                const isEven = index % 2 === 0;
                const offsetX = isEven ? "lg:mr-12" : "lg:ml-12";
                return (
                  <motion.div
                    key={visa.path}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className={`relative flex ${offsetX}`}
                  >
                    <motion.button
                      onClick={() => handleVisaClick(visa)}
                      onMouseEnter={() => setHoveredVisa(visa)}
                      onMouseLeave={() => setHoveredVisa(selectedVisa)}
                      whileHover={{
                        rotate: [0, -3, 3, -2, 2, 0],
                        transition: { duration: 0.6 },
                      }}
                      className="w-full max-w-[320px] text-left bg-white border-l-[6px] border-orange-600 hover:border-orange-800 hover:shadow-xl transition-all duration-300 px-4 py-3 rounded-xl text-base font-semibold text-gray-800 hover:bg-orange-600 hover:text-white shadow-md"
                    >
                      {visa.name}
                    </motion.button>
                  </motion.div>
                );
              })}
          </div>
        </div>

        {/* HORIZONTAL LINE DIVIDER */}
        <div className="max-w-2xl mx-auto mt-10 px-8 sm:px-12 ml-6">
          <hr className="border-t-2 border-black" />
        </div>

        {/* BOTTOM SECTION - Text + Form */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Text */}
          <div className="space-y-6 lg:-ml-14">
            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-3xl font-bold text-black"
            >
              Explore Job Seeker Opportunities with VJC Overseas
            </motion.h2>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="text-lg text-black"
            >
              Job Seeker Visas allow professionals to explore job opportunities abroad without an offer letter.
              These visas provide you the freedom to search and apply for jobs directly in the destination country
              with greater ease and legal support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="space-y-2"
            >
              <p className="text-xl font-semibold text-black">Popular Job Seeker Visa Destinations:</p>
              <ul className="list-none space-y-2 text-blue-900 text-lg pl-4">
                <li><a href="/migrate/germany" className="hover:text-black">• Migrate To Germany</a></li>
                <li><a href="/migrate/canada" className="hover:text-black">• Migrate To Canada</a></li>
                <li><a href="/migrate/united-states" className="hover:text-black">• Migrate To US</a></li>
                <li><a href="/migrate/australia" className="hover:text-black">• Migrate To Australia</a></li>
                <li><a href="/migrate/united-kingdom" className="hover:text-black">• Migrate To UK</a></li>
                <li><a href="/migrate/new-zealand" className="hover:text-black">• Migrate To New-Zealand</a></li>
                <li><a href="/migrate/hong-kong" className="hover:text-black">• Migrate To Hong-Kong</a></li>
                <li><a href="/migrate/south-africa" className="hover:text-black">• Migrate To South-Africa</a></li>
              </ul>
            </motion.div>
          </div>

          {/* Form */}
          <div className="w-full lg:ml-28">
            <Form />
          </div>
        </div>
      </div>

      {/* FORM POPUP */}
{showFormPopup && (
  <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 sm:p-6">
    <div className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl p-4 sm:p-8 animate-fadeIn max-h-[90vh] overflow-y-auto">
      <button
        onClick={() => setShowFormPopup(false)}
        className="absolute top-3 right-3 text-gray-700 hover:text-red-500 transition"
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
