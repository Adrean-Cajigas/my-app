import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image"

export default function About () {

    function Button( {text} ) {
        return(
            <button className="bg-accent rounded-[3rem] flex items-center gap-2 px-[1.5rem] py-[.5rem]
            hover:bg-[#FF9844] duration-200 ease-in-out">
                    <div className="text-secondary font-semibold">{text}</div>
            </button>  
        )
    }


    return(
        <section className="px-[6rem] pt-[8rem] pb-[6rem] rounded-[6rem]">
            <h2 className="font-bold text-secondary text-[2rem] mb-[3rem] px-[3rem]">More About me</h2>

            <div className="px-[3rem] flex gap-[12rem] mb-[4rem]">
                <div className="flex flex-col">
                    <p className="font-medium text-secondary text-[1.2rem] leading-10 mb-[3rem]">What excites me most about pursuing a career in software development is its profound impact on shaping the world around us. This has brought an 
                    entrepreneurial aspect in my journey as a website developer. Since the pandemic, I've also grown a passion for creating meaningful solutions for 
                    education, local businesses, and engaging in future opportunities.</p>

                    <div className="flex gap-4 flex-wrap justify-start items-center mb-[4rem]">
                        <Button text="Javascript"></Button>
                        <Button text="Typescript"></Button>
                        <Button text="HTML"></Button>
                        <Button text="CSS"></Button>
                        <Button text="Reactjs"></Button>
                        <Button text="Nextjs"></Button>
                        <Button text="Tailwind"></Button>
                        <Button text="Bootstrap"></Button>
                        <Button text="Figma"></Button>
                        <Button text="Github"></Button>
                        <Button text="Frontend Dev"></Button>
                        <Button text="UI/UX Design"></Button>
                        <Button text="Premiere Pro"></Button>
                        <Button text="Photoshop"></Button>
                    </div>

                    <div className="flex gap-1 items-center">
                        <a className="font-medium text-primary hover:text-[#2E1B0A] duration-200 ease-in-out text-[1rem] underline underline-offset-4" 
                        href="https://drive.google.com/file/d/1vXt9gzeR8jgeY2ngIVebc5CWXtiVw4he/view"
                        target="_blank"
                        >My Article: The Value of Engaging Community</a>
                        <FontAwesomeIcon icon={faArrowDown} className="rotate-[-135deg] text-primary"></FontAwesomeIcon>
                    </div>
                </div>

                <Image width={500} height={500} alt="me" className="w-[25rem]" src="/images/me1.png"></Image>
            </div>

            <div className="flex flex-wrap justify-between px-[3rem] gap-y-[2rem]">
                <Image width={500} height={500} alt="me" className="w-[37rem]" src="/images/me2.png"></Image>
                <Image width={500} height={500} alt="me" className="w-[37rem]" src="/images/me3.png"></Image>
                <Image width={500} height={500} alt="me" className="w-[37rem]" src="/images/me4.png"></Image>
                <Image width={500} height={500} alt="me" className="w-[37rem]" src="/images/me5.png"></Image>
            </div> 
        </section>
    )
}