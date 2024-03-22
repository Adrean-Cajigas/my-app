"use client"
import { useState, useEffect } from 'react';

export default function Hero( { title, header, animationClass } ) {

    const [scrollStyle, setScrollStyle] = useState({});
    const [leftTagsStyle, setLeftTagsStyle] = useState({});
    const [rightTagsStyle, setRightTagsStyle] = useState({});
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 1250);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            const maxFontSize = 10; 
            const maxLineHeight = 11;
            const maxOpacity = .5; 
    
            // Calculate dynamic font size, line height, and opacity based on the scroll position
            const fontSize = Math.min(7 + position / 200, maxFontSize);
            const lineHeight = Math.min(7 + position / 100, maxLineHeight);
            const opacity = Math.min(0.2 + position / 1000, maxOpacity);

            const moveDistance = Math.max(position * 2, 50); 
    
            // Styles for moving left and right
            const leftStyle = {
                transform: `translateX(${-moveDistance}px)`, // Move left
                transition: 'transform 1s ease-out',
            };
    
            const rightStyle = {
                transform: `translateX(${moveDistance}px)`, // Move right
                transition: 'transform 1s ease-out',
            };
    
            setLeftTagsStyle(leftStyle);
            setRightTagsStyle(rightStyle);
    
            setScrollStyle({
                fontSize: `${fontSize}rem`,
                lineHeight: `${lineHeight}rem`,
                opacity: opacity,
                transition: 'font-size 0.1s ease-out, line-height 0.1s ease-out, opacity 0.1s ease-out',
            });
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    function Adrean() {
        return(
            <h1 style={scrollStyle} className="text-accent opacity-20 font-thick text-[7rem] text-center 
            leading-[7rem] tracking-wide select-none z-[-1] tablet-s:text-[4.5rem]">Adrean Cajigas</h1>
        )}

    return(
        <section className="relative container mx-auto">
            <h3 className="text-secondary font-bold text-[2.5rem] text-center pt-[8rem] tablet-s:pt-[6rem] tablet-s:text-[2rem]">{header}</h3>
            <h1 className={`text-primary font-thick text-[7rem] tablet-s:text-[4.5rem] text-center leading-[7rem] tablet-s:leading-[5rem] tracking-wide ${animationClass}`}>{title}</h1>

            <div className='z-[-1]'>

                {isMobile ? (
                    <>
                        <Adrean></Adrean>
                        <Adrean></Adrean>
                        <Adrean></Adrean>
                        <Adrean></Adrean>
                        <Adrean></Adrean>
                    </>
                ) : (
                    <>
                        <Adrean></Adrean>
                        <Adrean></Adrean>
                        <Adrean></Adrean>
                        <Adrean></Adrean>
                    </>
                )}
            </div>


            <div className="absolute w-[85%] tablet:w-[80%] right-0 left-0 bottom-5 laptop-s:bottom-[5rem] mx-auto">
                <div className="flex flex-col gap-y-[3rem]">
                    <div className="flex justify-between w-full text-secondary font-semibold text-[1.5rem] text-center">
                        <p style={leftTagsStyle}>Website<br></br>Developer</p>
                        <p style={rightTagsStyle}>UI/UX<br></br>Designer</p>
                    </div>

                    <div className="flex justify-between w-full text-secondary font-semibold text-[1.5rem] text-center">
                        <p style={leftTagsStyle}>Part-time <br></br>Martial Artist</p>
                        <p style={rightTagsStyle}>Full-time <br></br>College Student</p>
                    </div>
                </div>
            </div>
        </section>
    )
}