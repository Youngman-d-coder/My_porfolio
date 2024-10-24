import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from "../assets/profile-image/profile.jpg";

const HeroSection = () => {
  const names = ["NELSON CHIMDIADI", "YOUNGMAN_D_CODER"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length);
    }, 2000); // Change name every 2 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [names.length]);

  return (
    <section className="bg-transparent  flex flex-col items-center justify-center ">
      <div className="h-[150px] w-[150px] rounded-full overflow-hidden">
        <img
          src={image}
          alt="Profile of Nelson Chimdiadi"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="text-center mt-7">
        <h1 className="text-2xl font-bold transition-opacity duration-500 opacity-100">
          HI, I AM {names[currentIndex]}
        </h1>
        <p className="text-2xl">a web developer</p>
      </div>
      <div className="mt-10 gap-7 flex flex-row space-x-4">
        <Link
          to="/about"
          className="p-3 px-11 border-2 border-white font-semibold transition duration-200 ease-in-out hover:bg-white hover:text-blue-800"
        >
          ABOUT
        </Link>
        <Link
          to="/contact"
          className="p-3 px-10 border-2 border-white font-semibold transition duration-200 ease-in-out hover:bg-white hover:text-blue-800"
        >
          CONTACT
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
