"use client"
import Cover from "@/components/cover";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import imageDetails from "@/components/adrean";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {

  const [current, setCurrent] = useState(0);
  const [animationClass, setAnimationClass] = useState("");
  const [isOnCooldown, setIsOnCooldown] = useState(false);

  const handleNext = () => {
    if (isOnCooldown) return;
    setIsOnCooldown(true); // Activate the cooldown
    setAnimationClass("animation-left"); // Apply the left animation class
    const nextIndex = (current + 1) % imageDetails.length;
  
    setCurrent(nextIndex);
  
    setTimeout(() => {
      setAnimationClass(""); // Clear the animation class
      setIsOnCooldown(false); // Deactivate the cooldown after the animation
    }, 500); // This duration should match your CSS animation duration
  };
  
  const handlePrev = () => {
    if (isOnCooldown) return;
    setIsOnCooldown(true); // Activate the cooldown
    setAnimationClass("animation-right"); // Apply the right animation class
    const prevIndex = (current - 1 + imageDetails.length) % imageDetails.length;
  
    setCurrent(prevIndex);
  
    setTimeout(() => {
      setAnimationClass(""); // Clear the animation class
      setIsOnCooldown(false); // Deactivate the cooldown after the animation
    }, 500); // This duration should match your CSS animation duration
  };

  return (
    <>
        <Cover></Cover>
        <Navbar></Navbar>
      <div className="relative min-h-screen overflow-hidden laptop-s:min-h-0">
      <Hero title={imageDetails[current].title} header={imageDetails[current].header} animationClass={animationClass} />

        <div className="absolute bottom-0 mx-auto right-0 left-0 select-none flex justify-center w-[45rem] tablet-s:w-[100%]">
          <Image width={500} height={500} src="/images/half-circle.png" alt="half circle" className="relative w-[100%] tablet-s:w-[80%] mobile:w-[85%] mobile-s:w-[90%] right-0 left-0 mx-auto"></Image>
          <FontAwesomeIcon 
          icon={faCircleChevronLeft} 
          onClick={handlePrev}
          className="text-primary text-[4rem] z-[50] absolute bottom-20 left-[-1rem] tablet-s:left-[4rem] mobile:left-[2.5rem] mobile-s:left-[2rem] tablet-s:text-[3.5rem]
          bg-[#FFFFFF] rounded-[100rem] cursor-pointer hover:text-[#41260F] duration-200 ease-in-out hover:scale-[1.1]"></FontAwesomeIcon>

          <FontAwesomeIcon 
          icon={faCircleChevronRight} 
          onClick={handleNext}
          className="text-primary text-[4rem] z-[50] absolute bottom-20 right-[-1rem] tablet-s:right-[4rem] mobile:right-[2.5rem] mobile-s:right-[2rem] tablet-s:text-[3.5rem]
          bg-[#FFFFFF] rounded-[100rem] cursor-pointer hover:text-[#41260F] duration-200 ease-in-out hover:scale-[1.1]"></FontAwesomeIcon>
        </div>

        <div className={`absolute bottom-0 w-full ${animationClass}`}>
          {imageDetails[current].component}
        </div>

      </div>

      <Projects></Projects>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
