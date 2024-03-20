import Image from "next/image"

export default function Hero( { title, header, animationClass } ) {

    function Adrean() {
        return(
            <h1 className="text-accent opacity-20 font-thick text-[7rem] text-center 
            leading-[7rem] tracking-wide select-none">Adrean Cajigas</h1>
        )
    }

    return(
        <section>
            <h3 className="text-secondary font-bold text-[2.5rem] text-center pt-[8rem]">{header}</h3>
            <h1 className={`text-primary font-thick text-[7rem] text-center leading-[7rem] tracking-wide ${animationClass}`}>{title}</h1>

            <div>
                <Adrean></Adrean>
                <Adrean></Adrean>
                <Adrean></Adrean>
                <Adrean></Adrean>
            </div>
        </section>
    )
}