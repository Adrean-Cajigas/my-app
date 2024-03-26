"use client";
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faArrowDown, faDownload, faHouse, faUser, faDiagramProject, faMessage} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Navbar() {

    const [isMobile, setIsMobile] = useState(false);
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const toggleOverlay = () => setOverlayVisible(!overlayVisible);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 200);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

      useEffect(() => {
        const scrollThreshold = 0; 
        const handleScroll = () => {
            setIsScrolled(window.scrollY > scrollThreshold);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function NavItem( {text, page} ) {
        return (
            <a href={page}>
                <li className="px-2 cursor-pointer font-semibold duration-300 hover:text-accent">{text}</li>
            </a>
        )
    }

    return(
        <div className={`sticky z-[100] transition-top duration-300 tablet-s:top-0 ${isScrolled ? 'top-0' : 'top-10'}`}>
            {isMobile ? (
            <nav className="h-[6rem] w-[1rem] flex justify-between items-center px-[4vw] tablet-s:h-[4rem] sticky top-10 z-[100]">
                <div className={`fixed top-0 bottom-0 z-10 bg-accent
                duration-500 ease-in-out ${overlayVisible ? 'right-0' : '-right-[300px]'} w-[300px] mobile:w-[240px]`}>
                    <ul className="flex flex-col items-center justify-end px-4 gap-y-10 
                    text-secondary mt-[8rem] text-[1.2rem]">
                        <NavItem text="Home" page=""></NavItem>
                        <NavItem text="Projects" page=""></NavItem>
                        <NavItem text="About" page=""></NavItem>
                        <NavItem text="Contact" page=""></NavItem>
                    </ul>
                </div>

                <FontAwesomeIcon
                icon={overlayVisible ? faXmark : faBars}
                className="cursor-pointer text-3xl z-10"
                color="white"
                onClick={toggleOverlay}
                />
            </nav>

            ):( 
            <nav className="absolute items-center px-[3rem] mobile-s:px-[1rem] py-[.6rem] mx-auto right-0 left-0 mobile:py-[1rem] mobile-s:py-[1.5rem]
            bg-secondary w-[60rem] tablet-s:w-[100%] rounded-[3rem] tablet-s:rounded-t-none tracking-wide mobile:rounded-b-[2rem] mobile-s:rounded-b-[1.5rem] mobile-xs:rounded-b-[1rem]">
                <ul className="flex flex-row items-center justify-between mobile:justify-evenly
                text-background text-[1rem] tablet-s:text-[.8rem] relative">
                    <div className="flex gap-x-[3rem] mobile:hidden">
                        <NavItem text="Home" page="#home"></NavItem>
                        <NavItem text="Projects" page="#projects"></NavItem>
                    </div>

                    <div className="hidden mobile:flex gap-x-[3rem] text-[1.5rem]">
                        <a href="#home">
                            <FontAwesomeIcon icon={faHouse} className="cursor-pointer"></FontAwesomeIcon>
                        </a>

                        <a href="#projects">
                            <FontAwesomeIcon icon={faDiagramProject} className="cursor-pointer"></FontAwesomeIcon>
                        </a>
                    </div>

                    <button className="bg-background rounded-[3rem] 
                    hover:bg-[#EEEAD3] duration-200 ease-in-out mobile:mx-8">
                        <a className="flex items-center gap-2 px-[2rem] mobile-s:px-[1.2rem] py-[.5rem]" href="/images/Adrean Cajigas Resume.pdf" target="_blank">
                            <div className="text-secondary font-semibold">My Resume</div>
                            <FontAwesomeIcon icon={faDownload} className="text-secondary mobile-xs:hidden"></FontAwesomeIcon>
                        </a>
                    </button>

                    <div className="flex gap-x-[3rem] mobile:hidden">
                        <NavItem text="About" page="#about"></NavItem>
                        <NavItem text="Contact" page="#contact"></NavItem>
                    </div>

                    <div className="hidden mobile:flex gap-x-[3rem] text-[1.5rem]">
                        <a href="#about">
                            <FontAwesomeIcon icon={faUser} className="cursor-pointer"></FontAwesomeIcon>
                        </a>

                        <a href="#contact">
                            <FontAwesomeIcon icon={faMessage} className="cursor-pointer"></FontAwesomeIcon>
                        </a>
                    </div>
                </ul>

                <div className="w-[60rem] tablet-s:w-[100%] h-[3.5rem] absolute bg-accent top-[.7rem] tablet-s:top-[.5rem] 
                right-0 left-0 rounded-[3rem] z-[-1] tablet-s:rounded-t-none mobile:hidden"></div>

            </nav>
            )}
        </div>
    )
}