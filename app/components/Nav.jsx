"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaEnvelope,
  FaBars,
  FaTimes,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Migrate To", path: "/migrate" },
    { name: "Study Abroad", path: "/studyabroad" },
    { name: "PR Visas", path: "/PR-visas" },
    { name: "Work Abroad", path: "/Workabroad" },
    { name: "Job Seeker Visas", path: "/Jobseeker" },
    
    { name: "Visit Visas", path: "/visitvisas" },
    { name: "Investor Visas", path: "/Investorvisas" },
    { name: "Schengen Visas", path: "/" },
    { name: "Resume Marketing", path: "/" },
    { name: "Coaching/Training", path: "/coaching" },
    { name: "services", path: "/services"},
  ];

  const migrateSubPages = [
    { name: "Germany", path: "/migrate/germany" },
    { name: "Canada", path: "/migrate/canada" },
    { name: "United States", path: "/migrate/united-states" },
    { name: "Australia", path: "/migrate/australia" },
    { name: "United Kingdom", path: "/migrate/united-kingdom" },
    { name: "New Zealand", path: "/migrate/new-zealand" },
    { name: "South Africa", path: "/migrate/south-africa" },
    { name: "Hong Kong", path: "/migrate/hong-kong" },
    { name: "Denmark", path: "/migrate/denmark" },
    { name: "UAE", path: "/migrate/uae" },
  ];
  const WorkabroadSubPages = [
    { name: "Germany Work Permit", path: "/Workabroad/germany-work-permit" },
    { name: "Canada Work Permit", path: "/Workabroad/canada-work-permit" },
    { name: "USA H1b Visa", path: "/Workabroad/usa-h1b-visa" },
    { name: "Australia Work Permit", path: "/Workabroad/australia-work-permit" },
    { name: "UK Work Permit", path: "/Workabroad/united-kingdom-work-permit" },
    { name: "Denmark Work Permit", path: "/Workabroad/denmark-work-permit" },
    { name: "Dubai Work Permit", path: "/Workabroad/dubai-work-permit" },
  ];

  const studyabroadSubPages = [
    { name: "USA", path: "/studyabroad/usa" },
    { name: "United Kingdom", path: "/studyabroad/uk" },
    { name: "Canada", path: "/studyabroad/canada" },
    { name: "Australia", path: "/studyabroad/australia" },
    { name: "Germany", path: "/studyabroad/germany" },
    { name: "Italy", path: "/studyabroad/italy" },
    { name: "France", path: "/studyabroad/france" },
    { name: "Singapore", path: "/studyabroad/singapore" },
    { name: "Malaysia", path: "/studyabroad/malaysia" },
    { name: "South Africa", path: "/studyabroad/southafrica" },
    { name: "New Zealand", path: "/studyabroad/newzealand" },
    { name: "Philippines", path: "/studyabroad/philippiness" },
    { name: "Poland", path: "/studyabroad/poland" },
    { name: "Ireland", path: "/studyabroad/ireland" },
    { name: "Spain", path: "/studyabroad/spain" },
    { name: "Netherlands", path: "/studyabroad/netherlands" },
    { name: "Switzerland", path: "/studyabroad/switerland" },
    { name: "Denmark", path: "/studyabroad/denmark" },
    { name: "Dubai", path: "/studyabroad/Dubai" },
    { name: "Luxembourg", path: "/studyabroad/luxembourg" },
    { name: "Hongkong", path: "/studyabroad/hongkong" },
    { name: "UAE", path: "/studyabroad/uae" },
  ];

  const prVisaSubPages = [
    { name: "Canada Permanent Residency Visa", path: "/PR-visas/canadapr" },
    { name: "Australia Permanent Residency Visa", path: "/PR-visas/australiapr" },
    { name: "UK Permanent Residency Visa", path: "/PR-visas/ukpr" },
    { name: "New Zealand Permanent Residency Visa", path: "/PR-visas/newzealandpr" },
    { name: "Germany Blue Card Visa", path: "/PR-visas/germanybluecard" },
    { name: "USA Green Card", path: "/PR-visas/usagreencard" },
  ];
  const Jobseeker = [
    { name: "Germany Jobseeker Visa", path: "/Jobseeker/germany-jobseeker-visa" },
    { name: "Austria Jobseeker Visa", path: "/Jobseeker/canada-jobseeker-visa" },
    { name: "Portugal Jobseeker Visa", path: "/Jobseeker/portugal-jobseeker-visa" },
    { name: "Sweden Jobseeker Visa", path: "/Jobseeker/sweden-jobseeker-visa" },
    { name: "Norway Jobseeker Visa", path: "/Jobseeker/norway-jobseeker-visa" },
    { name: "UAE Jobseeker Visa", path: "/Jobseeker/uae-jobseeker-visa" },
   
  ];
  const visitvisasSubPages = [
    { name: "USA Visit Visa", path: "/visitvisas/usa-visit-visa" },
  { name: "USA B1 Visa", path: "/visitvisas/usa-b1-visa" },
  { name: "USA B2 Visa", path: "/visitvisas/usa-b2-visa" },
  { name: "USA B1/B2 Visa", path: "/visitvisas/usa-b1-b2-visa" },
  { name: "Canada Visit Visa", path: "/visitvisas/canada-visit-visa" },
  { name: "Australia Visit Visa", path: "/visitvisas/australia-visit-visa" },
  { name: "UK Visit Visa", path: "/visitvisas/uk-visit-visa" },
  { name: "Dubai Visit Visa", path: "/visitvisas/dubai-visit-visa" },
  { name: "Denmark Visit Visa", path: "/visitvisas/denmark-visit-visa" },
  { name: "Austria Visit Visa", path: "/visitvisas/austria-visit-visa" },
  { name: "Italy Visit Visa", path: "/visitvisas/italy-visit-visa" },
  { name: "Schengen Visit Visa", path: "/visitvisas/schengen-visit-visa" },
   
  ];
  

  return (
    <header>
      {/* Top Section */}
      <div className="bg-white py-0 px-2 shadow-md z-50 fixed top-0 w-screen">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center -ml-5">
            <Link href="/" className="text-lg font-bold">
              <div className="relative h-14 w-24">
                <Image src="/logo-1.webp" alt="Logo" fill className="object-contain" />
              </div>
            </Link>
            <Link href="/" className="text-lg font-bold">
              <div className="relative h-14 w-28 -ml-6">
                <Image src="/logo-2.webp" alt="Logo" fill className="object-contain" />
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center ml-4">
            <div className="relative h-8 w-8">
              <Image src="/message.gif" alt="News" fill className="object-contain" />
            </div>
          </div>

          {/* Marquee */}
          <div className="marquee-container flex-1 mx-4 hidden md:block">
            <p className="whitespace-nowrap animate-marquee uppercase text-sm text-gray-800">
              Your Study and Work Abroad Opportunities Await! Explore the world with us. Learn more about visa programs and opportunities today!
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex items-center space-x-2">
            <div className="hidden md:flex items-center space-x-2 text-sm text-black uppercase font-semibold italic">
              {["Bangalore", "Hyderabad", "USA"].map((location) => (
                <div key={location} className="flex items-center animate-pulse text-custom-blue">
                  <div className="relative w-5 h-5 mr-1">
                    <Image src="/loc.png" alt={location} fill className="object-contain" />
                  </div>
                  <p>{location}</p>
                </div>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-2 text-xs lg:text-sm text-black uppercase font-semibold italic">
              <div className="flex items-center animate-pulse text-custom-blue">
                <a href="mailto:info@vjcoverseas.com" className="flex items-center">
                  <FaEnvelope className="mr-1 w-5 h-5 text-orange-500" />
                  <p>info@vjcoverseas.com</p>
                </a>
              </div>
            </div>

            <div>
              <a href="tel:+919160449000" className="flex items-center text-white py-1 px-0 rounded-lg text-xs lg:text-sm whitespace-nowrap font-bold uppercase mr-3">
                <div className="relative w-6 h-6 mr-1">
                  <Image src="/phone.gif" alt="Phone" fill className="object-contain" />
                </div>
                <span className="text-custom-blue">+91 9160449000</span>
              </a>
            </div>
          </div>
        </div>
      </div>
{/* Desktop Navbar */}
<div className="bg-orange-500 fixed top-12 w-screen z-50 hidden md:block">
  <nav className="flex justify-between items-center px-2 max-w-7xl py-1.5">
    <div className="flex flex-row -space-x-2 whitespace-nowrap">
      {menuItems.map((item, index) => (
        <React.Fragment key={item.name}>
          {item.name === "Study Abroad" ? (
            // WRAP BOTH LINK & SUBMENU inside one 'group' container to maintain hover state
            <div className="relative group">
              {/* Main Menu Link */}
              <Link
                href={item.path}
                className="text-white text-sm lg:text-xs font-semibold px-3.5 hover:bg-white hover:bg-opacity-20 uppercase mt-2"
              >
                {item.name}
              </Link>

              {/* Submenu: Study Abroad (Black background, hover persistent) */}
              <div className="absolute left-0 mt-3 invisible opacity-0 bg-gradient-to-br from-orange-500/60 to-black group-hover:visible group-hover:opacity-100 hover:visible hover:opacity-100 grid grid-cols-5 grid-rows-4 gap-2 bg-black bg-opacity-50 p-3 w-[700px] min-h-[200px] shadow-xl z-50  transition-all duration-300 ease-in-out">
                {studyabroadSubPages.map((subItem) => (
                  <Link
                    href={subItem.path}
                    key={subItem.name}
                    className="text-white text-sm font-semibold text-center px-3 py-2  hover:text-orange-500 hover:bg-white hover:bg-opacity-10 transition duration-200 ease-in-out whitespace-normal break-words"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="relative group">
              <Link
                href={item.path}
                className="text-white text-sm lg:text-xs font-semibold px-3.5  uppercase mt-1"
              >
                {item.name}
              </Link>

              {["Migrate To", "PR Visas", "Job Seeker Visas","Work Abroad","Visit Visas"].includes(item.name) && (
  <div className="absolute left-0 top-full mt-3 invisible bg-gradient-to-br from-orange-500/60 to-black opacity-0 group-hover:visible group-hover:opacity-100 hover:visible hover:opacity-100 flex flex-col space-y-2 bg-black bg-opacity-50 p-3 shadow-xl z-50 transition-all duration-300 ease-in-out">
    {(
      item.name === "Migrate To"
        ? migrateSubPages
        :item.name === "Work Abroad"
        ? WorkabroadSubPages
        : item.name === "PR Visas"
        ? prVisaSubPages
        : item.name === "Visit Visas"
        ? visitvisasSubPages
        : item.name === "Job Seeker Visas"
        ? Jobseeker
        : [] // Fallback
    ).map((subItem) => (
      <Link
        href={subItem.path}
        key={subItem.name}
        className="text-white text-sm font-semibold text-center  px-3 py-2 hover:text-orange-500 hover:bg-white hover:bg-opacity-10 transition duration-200 ease-in-out whitespace-nowrap"
      >
        {subItem.name}
      </Link>
    ))}
  </div>
)}

  
            </div>
          )}

          {index < menuItems.length - 1 && (
            <span className="text-white hidden lg:inline-block">|</span>
          )}
        </React.Fragment>
      ))}
    </div>
  </nav>
</div>


     {/* Mobile Navbar */}
      <div className="bg-orange-500 fixed top-12 w-screen z-50 md:hidden">
        <nav className="flex justify-between items-center py-2">
          <div className="flex items-center space-x-2 text-xs lg:text-sm text-black uppercase font-semibold italic">
            <div className="flex items-center animate-pulse text-black">
              <a href="mailto:info@vjcoverseas.com" className="flex items-center">
                <FaEnvelope className="mr-1 w-5 h-5 text-orange-500" />
                <p>info@vjcoverseas.com</p>
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4 ml-6">
            <a href="https://www.facebook.com/VJCOVERSEAS/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-white hover:text-black text-xl" />
            </a>
            <a href="https://x.com/VJCOVERSEAS" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white hover:text-black text-xl" />
            </a>
            <a href="https://www.instagram.com/vjcoverseas_/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white hover:text-black text-xl" />
            </a>
          </div>

          <div className="flex items-center px-4 ml-4">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white text-xl">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          <div className={`absolute top-9 left-0 w-full h-screen items-center bg-orange-500 flex flex-col space-y-4 ${isMenuOpen ? 'block' : 'hidden'} transition-all ease-in-out duration-300`}>
            {menuItems.map((item, index) => (
              <React.Fragment key={item.name}>
                <Link
                  href={item.path}
                  className="text-white text-sm font-semibold px-4 mt-2 hover:bg-white hover:bg-opacity-20 uppercase"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {index < menuItems.length - 1 && <div className="w-40 h-px bg-white mx-2" />}
              </React.Fragment>
            ))}
          </div>
        </nav>
      </div>

      {/* Free Assessment Button */}
      <Link href="/assessment">
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-center space-y-2">
          <div className="text-white font-bold text-sm bg-green-500 px-3 py-1 rounded-lg shadow-lg animate-shake">
            FREE
          </div>
          <div className="animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div className="flex flex-col items-center text-white font-bold text-sm bg-orange-500 px-3 py-2 rounded-lg shadow-lg transition-transform hover:scale-110 hover:bg-orange-600">
            {"ASSESSMENT".split("").map((char, i) => <span key={i}>{char}</span>)}
          </div>
        </div>
      </Link>

      <style>
        {`
        @keyframes shake {
          0% { transform: translateX(0); }
          25% { transform: translateX(-3px); }
          50% { transform: translateX(3px); }
          75% { transform: translateX(-3px); }
          100% { transform: translateX(0); }
        }
        .animate-shake {
          animation: shake 0.5s infinite;
        }
        `}
      </style>
    </header>
  );
};

export default Navbar;
