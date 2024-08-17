import React from 'react'

import image from '../assets/image-contact-us.svg'
import { useState } from "react";
export const Hero = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();

        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
    };
    return (

        <section className=" px-36 py-10 ">
            <div className="heading font-extrabold text-7xl"><h1>CONTACT US</h1>
            </div>
            <div className="text-zinc-600 font-bold pt-6">
                <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA</p>
            </div>
           <div className="flex justify-between">
            <div className="form flex-col">
            <div className="buttons pl-10 pr-10 flex space-x-8 pt-20 ">
                <button
                    className="transition-shadow bg-black text-white p-2 rounded-md hover:scale-110 flex justify-around space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"/>
                    </svg>

                    <p>VIA SUPPORT CHAT</p>
                </button>
                <button
                    className="transition-shadow bg-black text-white p-2 rounded-md hover:scale-110 flex justify-around space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/>
                    </svg>

                    <p> VIA CALL</p>
                </button>
            </div>
                <div className="p-10 flex-col">
                    <button
                        className="border border-black p-2 rounded-md hover:scale-110 flex justify-around space-x-1 w-full">VIA
                        EMAIL FORM
                    </button>
                    <form className="p-2" onSubmit={onSubmit}>
                        <div className="flex flex-col my-1">
                            <label htmlFor="name">NAME</label>
                            <input className="border border-black rounded-md" type="text" name="name"/>
                        </div>
                        <div className=" flex flex-col my-1">
                            <label htmlFor="email">EMAIL</label>
                            <input className="border border-black rounded-md" type="email" name="email"/>
                        </div>
                        <div className=" flex flex-col my-1">
                            <label htmlFor="text">TEXT</label>
                            <textarea className="border border-black rounded-md" name="text" rows="8"/>
                        </div>
                        <div className="justify-end flex my-3">
                            <button
                                className="transition-shadow bg-black text-white p-2 rounded-md hover:scale-110 flex justify-around space-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5"
                                     stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/>
                                </svg>

                                <p> VIA CALL</p>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
               <img src={image} alt="Contact Us" />
           </div>
        </section>
    )
}
