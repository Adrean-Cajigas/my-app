"use client"
import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import About from "@/components/about";
import Contact from "@/components/contact";
import imageDetails from "@/components/adrean";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {

  const [current, setCurrent] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  const handleNext = () => {
    setAnimationClass("animation-left");
    setCurrent((prevCurrent) => (prevCurrent + 1) % imageDetails.length);
    setTimeout(() => setAnimationClass(""), 600); // Reset animation class to allow it to be reapplied
  };

  const handlePrev = () => {
    setAnimationClass("animation-right");
    setCurrent((prevCurrent) => (prevCurrent - 1 + imageDetails.length) % imageDetails.length);
    setTimeout(() => setAnimationClass(""), 600); // Reset animation class to allow it to be reapplied
  };

  return (
    <>
        <Navbar></Navbar>
      <div className="relative min-h-screen">
      <Hero title={imageDetails[current].title} header={imageDetails[current].header} animationClass={animationClass} />

        <div className="absolute bottom-0 mx-auto right-0 left-0 select-none flex justify-center w-[45rem]">
          <Image width={500} height={500} src="/images/half-circle.png" className="relative w-[100%]"></Image>
          <FontAwesomeIcon 
          icon={faCircleChevronLeft} 
          onClick={handlePrev}
          className="text-primary text-[4rem] absolute bottom-20 left-[-1rem] 
          bg-[#FFFFFF] rounded-[100rem] cursor-pointer hover:text-[#41260F] duration-200 ease-in-out hover:scale-[1.1]"></FontAwesomeIcon>
          <FontAwesomeIcon 
          icon={faCircleChevronRight} 
          onClick={handleNext}
          className="text-primary text-[4rem] absolute bottom-20 right-[-1rem] 
          bg-[#FFFFFF] rounded-[100rem] cursor-pointer hover:text-[#41260F] duration-200 ease-in-out hover:scale-[1.1]"></FontAwesomeIcon>
        </div>

        <div className={`absolute bottom-0 w-full ${animationClass}`}>
          {imageDetails[current].component}
        </div>

      </div>

      <Projects></Projects>
      <About></About>
      <Contact></Contact>

    </>
  );
}
