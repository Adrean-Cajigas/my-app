"use client";
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Navbar() {

    const [isMobile, setIsMobile] = useState(false);
    const [overlayVisible, setOverlayVisible] = useState(false);
    const toggleOverlay = () => setOverlayVisible(!overlayVisible);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    function NavItem( {text, page} ) {
        return (
            <a href={page}>
                <li className="px-2 cursor-pointer font-[500] duration-300 hover:text-accent">{text}</li>
            </a>
        )
    }

    return(
        <>
            {isMobile ? (
            <nav className="h-[6rem] flex justify-between items-center px-[4vw] tablet-s:h-[4rem]">
                <div className={`fixed top-0 bottom-0 z-10 bg-accent
                duration-500 ease-in-out ${overlayVisible ? 'right-0' : '-right-[300px]'} w-[300px] mobile:w-[240px]`}>
                    <ul className="flex flex-col items-center justify-center px-4 gap-y-10 
                    text-secondary mt-[8rem] text-[1.2rem]">
                        <NavItem text="Home" page=""></NavItem>
                        <NavItem text="Projects" page=""></NavItem>
                        <NavItem text="About" page=""></NavItem>
                        <NavItem text="Contact" page=""></NavItem>
                    </ul>
                </div>

                <img className="h-[2.2rem] cursor-pointer" src="favicon.ico"></img>
                <FontAwesomeIcon
                icon={overlayVisible ? faXmark : faBars}
                className="cursor-pointer text-3xl z-10"
                color="white"
                onClick={toggleOverlay}
                />
            </nav>

            ):( 

            <nav className="mx-auto items-center px-[3rem] py-[.8rem]
            bg-secondary w-[60rem] rounded-[3rem] mt-[2rem] font-medium relative">
                <ul className="flex flex-row items-center justify-between
                text-background text-[1rem] relative">
                    <div className="flex gap-x-[3rem]">
                        <NavItem text="Home" page=""></NavItem>
                        <NavItem text="Projects" page=""></NavItem>
                    </div>

                    <button className="flex bg-background px-[2rem] py-[.5rem] rounded-[3rem] 
                    items-center gap-2 hover:bg-[#EEEAD3] duration-200 ease-in-out">
                        <div className="text-secondary font-semibold">My Resume</div>
                        <FontAwesomeIcon icon={faDownload} className="text-secondary"></FontAwesomeIcon>
                    </button>


                    <div className="flex gap-x-[3rem]">
                        <NavItem text="About" page=""></NavItem>
                        <NavItem text="Contact" page=""></NavItem>
                    </div>
                </ul>
                <div className="w-[60rem] h-[4rem] absolute bg-accent top-[.7rem] left-0 rounded-[3rem] z-[-1]"></div>
            </nav>
            )}
        </>
    )
}