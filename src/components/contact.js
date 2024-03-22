"use client"
import React, { useState } from 'react';

const DynamicWidthInput = ({ type, value, onChange, placeholder }) => (
    <input 
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        size={Math.max(value.length, placeholder.length) || .5}
        className="bg-background focus:outline-none text-center"
        style={{ minWidth: '0px', maxWidth: '30rem' }} // Ensure a minimum width
    />
);

export default function Contact() {
    const [name, setName] = useState('');
    const [adjective, setAdjective] = useState('');
    const [contactMethod, setContactMethod] = useState('');
    const [talkAbout, setTalkAbout] = useState('');
    const [rating, setRating] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Message: Hi Adrean! My name is ${name} and you seem like a very ${adjective} person. You can reach me through ${contactMethod} so we can talk more about ${talkAbout}. Thank you and if I were to rate your portfolio out of ten, I would rate it a ${rating}.`);
    };

    return (
        <section className="px-[6rem] tablet-s:px-[4rem] py-[8rem] tablet-s:py-[6rem] rounded-[6rem] container mx-auto ">
            <h2 className="font-semibold text-secondary text-center text-[3rem] tablet-s:text-[2rem] mb-[3rem] px-[3rem] tablet-s:px-0">
                <span className="text-primary">Want to know more about me? </span> 
                Let's talk!
            </h2>   

            <form onSubmit={handleSubmit} className="text-center font-medium text-[1.5rem] tablet-s:text-[1.2rem] w-[80%] mx-auto mb-[4rem] tablet-s:w-[100%]">
                <p className='leading-[4rem] mb-[4rem] tablet-s:leading-[3rem]'>
                    Hi Adrean! My name is 
                    <DynamicWidthInput type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="your name"/> 
                    and what I do is
                    <DynamicWidthInput type="text" value={adjective} onChange={(e) => setAdjective(e.target.value)} placeholder="occupation"/> 
                    You can reach me through 
                    <DynamicWidthInput type="text" value={contactMethod} onChange={(e) => setContactMethod(e.target.value)} placeholder="contact method"/> so we can talk more about 
                    <DynamicWidthInput type="text" value={talkAbout} onChange={(e) => setTalkAbout(e.target.value)} placeholder="topic"/>. If I were to rate your portfolio out of ten, I would rate it a
                    <DynamicWidthInput type="text" value={rating} onChange={(e) => setRating(e.target.value)} placeholder="1-10"/>. Thank you and I look forward to connecting with you soon!
                </p>

                <button type="submit" className="bg-primary px-[2.5rem] py-[.6rem] rounded-[2rem] text-background font-semibold text-[1.2rem] tablet-s:text-[1.1rem]
                hover:bg-[#41260F] duration-200 ease-in-out">Send Message</button>
            </form>
        </section>
    );
}