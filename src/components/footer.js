import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {

    return(
        <footer className="bg-primary rounded-t-[2rem] px-[7rem] py-[4rem] tablet-s:px-[2rem] mobile-s:px-[1rem] tablet-s:py-[3rem] text-background">
            <div className="container mx-auto flex justify-between items-center mobile:flex-col">
                <div className="flex flex-col gap-y-[1rem] tablet-s:gap-y-[1.8rem] mobile:items-center mobile:gap-y-[1rem]">
                    <p className="font-bold text-[2.5rem] tablet-s:text-[1.5rem] tracking-wider text-center">Making Today's Dreams <br className="mobile:hidden"></br>Tomorrow's Possibilities</p>
                    <p className="tablet-s:text-[.9rem]">- Grand Master H.U. Lee</p>
                </div>
                <div className="flex flex-col items-end pt-[1.5rem] mobile:flex-row mobile-s:flex-col mobile:justify-center mobile:items-center mobile:gap-10 mobile-s:gap-4">
                    <p className="font-bold text-[1.2rem] mb-[.3rem] tracking-wide tablet-s:text-[1rem] mobile:mb-0">Adrean Cajigas</p>
                    <a href="mailto:adrean.cajigas@gmail.com" className="tracking-wider tablet-s:text-[0.9rem]">adrean.cajigas@gmail.com</a>
                    <div className="flex gap-[3rem] mt-[2.3rem] tablet-s:mt-[1.6rem] tablet-s:gap-[2rem] mobile:mt-0">

                        <a href="https://www.instagram.com/adreanninjaex/" target="_blank" rel="noopener noreferrer"
                        className="flex gap-2 items-center tablet-s:text-[.9rem] mobile:text-[1rem]">
                            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                            <p className="tablet-s:hidden">Instagram</p>
                        </a>

                        <a href="https://www.linkedin.com/in/adrean-cajigas/" target="_blank" rel="noopener noreferrer"
                        className="flex gap-2 items-center tablet-s:text-[.9rem] mobile:text-[1rem]">
                            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                            <p className="tablet-s:hidden">LinkedIn</p>
                        </a>

                        <a href="https://github.com/Adrean-Cajigas" target="_blank" rel="noopener noreferrer"
                        className="flex gap-2 items-center tablet-s:text-[.9rem] mobile:text-[1rem]">
                            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                            <p className="tablet-s:hidden">GitHub</p>
                        </a>
                    </div>
                </div>
            </div>
            <hr className="border-b-background border-b-[1px] mt-[3rem] container mx-auto"></hr>

            <div className="container mx-auto flex justify-between items-center mt-[1.5rem] tablet-s:flex-col tablet-s:gap-y-[2rem]">
                <div className="flex gap-x-[3rem] font-semibold tablet-s:hidden">
                    <p>Home</p>
                    <p>Projects</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>
                <p className="font-semibold">© 2024 Adrean Cajigas. All Rights Reserved.</p>
            </div>
        </footer>
    )
}