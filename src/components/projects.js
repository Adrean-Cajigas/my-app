import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Projects() {

    function Button( {text, link} ) {
        return(
            <button className="bg-background rounded-[3rem] 
            hover:bg-[#EEEAD3] duration-200 ease-in-out">
                <a className="flex items-center gap-2 px-[1.5rem] py-[.5rem]" href={link} target="_blank">
                    <div className="text-secondary font-semibold">{text}</div>
                    <FontAwesomeIcon icon={faArrowDown} className="rotate-[-135deg]"></FontAwesomeIcon>
                </a>
            </button>  
        )
    }

    return(

        <section className="bg-primary px-[6rem] py-[8rem] rounded-[6rem] z-[10]">
            <h2 className="font-bold text-background text-[2rem] mb-[4rem] px-[3rem]">My Projects</h2>

            <div className="px-[3rem] flex flex-col gap-y-[12rem]">

                <div>
                    <div className="flex items-end gap-[3rem] mb-[2rem]">
                        <h1 className="text-accent font-bold text-[6rem] leading-[4.2rem]">Community A.L.I.</h1>

                        <div className="flex gap-4">
                            <Button text="Visit Website" link="https://www.communityali.org/"></Button>
                            <Button text="Visit Github Repo" link="https://github.com/Community-ALI/CommunityALI-Website"></Button>
                        </div>
                    </div>

                    <p className="text-background font-semibold text-[1.5rem]">An online community-based platform that revolutionizes the way colleges connect with their students. 
                    <span className="text-[1rem] ml-[.5rem]">(2022)</span></p>

                    <div className="flex gap-5 mt-[4rem] flex-wrap">
                        <Image width={800} height={800} alt="Community A.L.I" className="w-[35rem]" src="/images/ali1.png"></Image>
                        <Image width={800} height={800} alt="Community A.L.I" className="w-[35rem]" src="/images/ali2.png"></Image>
                        <Image width={800} height={800} alt="Community A.L.I" className="w-[35rem]" src="/images/ali3.png"></Image>
                        <Image width={800} height={800} alt="Community A.L.I" className="w-[35rem]" src="/images/ali4.png"></Image>
                    </div>
                </div>


                <div>
                    <div className="flex items-end gap-[3rem] mb-[2rem]">
                            <h1 className="text-accent font-bold text-[6rem] leading-[4.2rem]">Club Application</h1>

                            <div className="flex gap-4">
                                <Button text="Visit Website" link="https://club-application-c15c28325e63.herokuapp.com/"></Button>
                                <Button text="Visit Github Repo" link="https://github.com/Community-ALI/club-website"></Button>
                            </div>
                    </div>

                    <p className="text-background font-semibold text-[1.5rem]">A user-friendly web application that streamlines club paperwork into a singular secure system.
                    <span className="text-[1rem] ml-[.5rem]">(2024)</span></p>

                    <div className="flex gap-5 mt-[4rem] flex-wrap">
                        <Image width={800} height={800} alt="Club Website" className="w-[35rem]" src="/images/club1.png"></Image>
                        <Image width={800} height={800} alt="Club Website" className="w-[35rem]" src="/images/club3.png"></Image>
                        <Image width={800} height={800} alt="Club Website" className="w-[35rem]" src="/images/club2.png"></Image>
                        <Image width={800} height={800} alt="Club Website" className="w-[35rem]" src="/images/club4.png"></Image>
                    </div>
                </div>
              
            </div>
        </section>
    )
}