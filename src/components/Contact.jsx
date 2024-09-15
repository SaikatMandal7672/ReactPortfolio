import React, { useRef, useEffect } from 'react'
import { CONTACT, SOCIAL_MEDIA_LINKS } from '../constants'

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)





const Contact = () => {
    const contactRef = useRef(null)
    useEffect(() => {
        const text = contactRef.current.innerText;
        const chars = text.split("").map((char) => `<span>${char}</span>`).join("");

        contactRef.current.innerHTML = chars;

        const charsArray = contactRef.current.querySelectorAll("span");

        gsap.from(charsArray, {
            scrollTrigger: {
                trigger: contactRef.current,
                start: "top 80%",
                end: 'top 15%',
                scrub: true,
                markers: false,

            },
            ease: "power2.inOut",
            duration: 1,
            opacity: 0.2,
            stagger: 0.2,

        });


    }, [])

    return (
        <section id='contact'>
            <div className="mx-auto max-w-6xl">
                <p className="text-4xl lg:text-8xl text-center my-10">
                    Interested  in Working together?
                </p>
                <p className="p-4 text-center text-2xl lg:text-5xl text-gray-300" ref={contactRef}>{CONTACT.text}</p>
                <p className="my-4 text-center text-2xl font-medium text-lime-300 lg:pt-6 lg:text-5xl ">{CONTACT.email}</p>

                <p className="my-4 text-center text-2xl font-medium text-lime-300 lg:pt-6 lg:text-5xl ">{CONTACT.phone}</p>
            </div>
            <div className="mt-20 flex items-center justify-center gap-8">
                {
                    SOCIAL_MEDIA_LINKS.map((link, index) => (
                        <a href={link.href} key={index} target='_blank'>
                            {link.icon}
                        </a>
                    ))
                }
            </div>
            <p className="my-8 text-center text-gray-400">&copy; Saikat Mandal.All rights reserved</p>
        </section>
    )
}

export default Contact