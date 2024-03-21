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
        style={{ minWidth: '3rem' }} // Ensure a minimum width
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
        <section className="px-[6rem] py-[8rem] rounded-[6rem]">
            <h2 className="font-semibold text-secondary text-center text-[3rem] mb-[3rem] px-[3rem]">
                <span className="text-primary">Want to know more about me? </span> 
                Let's talk!
            </h2>   

            <form onSubmit={handleSubmit} className="text-center font-medium text-[1.5rem] w-[80%] mx-auto">
                <p className='leading-[4rem]'>
                    Hi Adrean! My name is 
                    <DynamicWidthInput type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name"/> 
                    and you seem like a very 
                    <DynamicWidthInput type="text" value={adjective} onChange={(e) => setAdjective(e.target.value)} placeholder="Adjective"/> 
                    person. You can reach me through 
                    <DynamicWidthInput type="text" value={contactMethod} onChange={(e) => setContactMethod(e.target.value)} placeholder="Contact Method"/> so we can talk more about 
                    <DynamicWidthInput type="text" value={talkAbout} onChange={(e) => setTalkAbout(e.target.value)} placeholder="Topic"/>. Thank you and if I were to rate your portfolio out of ten, I would rate it a 
                    <DynamicWidthInput type="number" value={rating} onChange={(e) => setRating(e.target.value)} placeholder="Rating"/>.
                </p>

                <button type="submit" className="bg-primary px-[2rem] py-[.8rem] rounded-[2rem] text-background font-semibold">Send Message</button>
            </form>
        </section>
    );
}