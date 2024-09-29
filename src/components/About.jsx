import React, { useRef, useEffect } from 'react'
import { ABOUT } from '../constants/index'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)




const About = () => {

  const abtRef = useRef(null)
  useEffect(() => {
    const text = abtRef.current.innerText;
    const chars = text.split("").map((char) => `<span>${char}</span>`).join("");

    abtRef.current.innerHTML = chars;

    const charsArray = abtRef.current.querySelectorAll("span");

    gsap.from(charsArray, {
      scrollTrigger: {
        trigger: abtRef.current,
        start: "top 80%",
        end: 'top 10%',
        scrub: true,
        markers: false,

      },
      ease: "power2.inOut",
      duration:1,
      opacity: 0.2,
      stagger: 0.2,

    });


  }, [])
  return (
    <section id='about'>
      <h2 className="my-10  text-4xl lg:text-8xl "> About Me</h2>
      <div className="flex items-center justify-center">
        <p className="m-8 max-w-6xl text-2xl text-center lg:text-5xl text-gray-300" ref={abtRef}>{ABOUT}</p>
      </div>
    </section>
  )
}

export default About