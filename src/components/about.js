import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image"

export default function About () {

    function Button( {text} ) {
        return(
            <div className="bg-accent rounded-[3rem] flex items-center gap-2 px-[1.5rem] py-[.5rem]
            hover:bg-[#FF9844] duration-200 ease-in-out tablet-s:scale-[0.9]">
                    <div className="text-secondary font-semibold">{text}</div>
            </div>  
        )
    }

    return(
        <section className="px-[9rem] pt-[8rem] pb-[6rem] tablet-s:pt-[6rem] tablet-s:pb-[4rem] rounded-[6rem] container mx-auto max-w-[100rem] laptop-s:px-[6rem] tablet-s:px-[4rem] mobile:px-[3rem]">
            <h2 className="font-bold text-secondary text-[2rem] mb-[3rem] tablet-s:mb-[1.5rem]">More About me</h2>

            <div className="flex gap-[12rem] laptop:gap-[6rem] mb-[4rem] items-start justify-between">
                <div className="flex flex-col max-w-[40rem] laptop:max-w-[50rem]">
                    <p className="font-medium text-secondary text-[1.2rem] leading-10 mb-[3rem] tablet-s:text-[1rem]">What excites me most about pursuing a career in software development is its profound impact on shaping the world around us. This has brought an 
                    entrepreneurial aspect in my journey as a website developer. Since the pandemic, I've also grown a passion for creating meaningful solutions for 
                    education, local businesses, and engaging in future opportunities.</p>

                    <div className="flex gap-4 mobile:gap-3 flex-wrap justify-start items-center mb-[4rem] laptop:pr-[2rem]">
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
                        <a className="font-medium text-primary hover:text-[#2E1B0A] duration-200 ease-in-out text-[1rem] tablet-s:text-[0.9rem] underline underline-offset-4" 
                        href="https://drive.google.com/file/d/1vXt9gzeR8jgeY2ngIVebc5CWXtiVw4he/view"
                        target="_blank"
                        >My Article: The Value of Engaging Community</a>
                        <FontAwesomeIcon icon={faArrowDown} className="rotate-[-135deg] text-primary"></FontAwesomeIcon>
                    </div>
                </div>

                <Image width={500} height={500} alt="me" className="w-[25rem] tablet-s:hidden" src="/images/me1.png"></Image>
            </div>

            <div className="flex flex-wrap justify-center gap-[2rem] container mx-auto tablet-s:gap-[1rem] tablet-s:justify-start">
                <Image width={500} height={500} alt="me" className="w-[48.5%] tablet-s:w-[90%] mobile:w-[95%]" src="/images/me2.png"></Image>
                <Image width={500} height={500} alt="me" className="w-[48.5%] tablet-s:w-[90%] mobile:w-[95%]" src="/images/me3.png"></Image>
                <Image width={500} height={500} alt="me" className="w-[48.5%] tablet-s:w-[90%] mobile:w-[95%]" src="/images/me4.png"></Image>
                <Image width={500} height={500} alt="me" className="w-[48.5%] tablet-s:w-[90%] mobile:w-[95%]" src="/images/me5.png"></Image>
            </div> 
        </section>
    )
}