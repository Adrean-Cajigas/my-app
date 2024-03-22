import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {

    return(
        <footer className="bg-primary rounded-t-[2rem] px-[7rem] py-[4rem] text-background">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex flex-col gap-y-[1rem]">
                    <p className="font-bold text-[2.5rem] tracking-wider">Making Today's Dreams <br></br>Tomorrow's Possibilities</p>
                    <p>- Grand Master H.U. Lee</p>
                </div>
                <div className="flex flex-col items-end pt-[1.5rem]">
                    <p className="font-bold text-[1.2rem] mb-[.3rem] tracking-wide">Adrean Cajigas</p>
                    <a href="mailto:adrean.cajigas@gmail.com" className="tracking-wider">adrean.cajigas@gmail.com</a>
                    <div className="flex gap-[3rem] mt-[2.3rem]">

                        <div className="flex gap-2 items-center">
                            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                            <a href="https://www.instagram.com/adreanninjaex/" target="_blank" rel="noopener noreferrer" className="">Instagram</a>
                        </div>

                        <div className="flex gap-2 items-center">
                            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                            <a href="https://www.linkedin.com/in/adrean-cajigas/" target="_blank" rel="noopener noreferrer" className="">LinkedIn</a>
                        </div>

                        <div className="flex gap-2 items-center">
                            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                            <a href="https://github.com/Adrean-Cajigas" target="_blank" rel="noopener noreferrer" className="">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-b-background border-b-[1px] mt-[3rem] container mx-auto"></hr>

            <div className="container mx-auto flex justify-between items-center mt-[1.5rem]">
                <div className="flex gap-x-[3rem] font-semibold">
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