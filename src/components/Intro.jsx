import React from 'react'
import { useLayoutEffect, useRef } from 'react'
import gsap from "gsap"

const Intro = () => {

    const comp = useRef(null)
    const title1 = "UI / UX"
    const title3 = "INTERACTION/DESIGN"
    const title4 = "BACKEND / FRONTEND /DEV"
    const title5 = "CREATIVE/WEBDEV"
    const title6 = "WEB/LOW"

    const title2 = "MOTION/DESIGN"
    const welcome = "WELCOME."

    const split1 = title1.split("");
    const split2 = title2.split("");
    const split3 = title3.split("");
    const split4 = title4.split("");
    const split5 = welcome.split("");
    const split6 = title5.split("");
    const split7 = title6.split("");

    console.log("", split1);


    useLayoutEffect(() => {
        const cntx = gsap.context(() => {
            const t1 = gsap.timeline()

            t1.from("#intro-slider", {
                xPercent: "-100",
                duration: 1.3,
                delay: .3,
                ease: "power3.inOut",
            }).from(".s1", {
                opacity: 0,
                y: 80,
                stagger: .02,
                duration: .575,
                rotateX: -90,
            }).to(".s1", {
                opacity: 0,
                y: -80,
                rotateX: 90,
                stagger: .02,
                duration: .575,

            }).from(".s2", {
                opacity: 0,
                y: 80,
                stagger: .02,
                delay: -.71,
                duration: .575,
                rotateX: -90,
            }).to(".s2", {
                opacity: 0,
                y: -80,
                rotateX: 90,
                stagger: .02,
                duration: .575,
            })
                .from(".s3", {
                    opacity: 0,
                    y: 80,
                    stagger: .02,
                    delay: -.71,
                    duration: .375,

                    rotateX: -90,
                }).to(".s3", {
                    opacity: 0,
                    y: -80,
                    rotateX: 90,
                    stagger: .02,
                    duration: .375,
                }).from(".s4", {
                    opacity: 0,
                    y: 80,
                    stagger: .02,
                    delay: -.71,
                    duration: .375,

                    rotateX: -90,
                }).to(".s4", {
                    opacity: 0,
                    y: -80,
                    rotateX: 90,
                    stagger: .02,
                    duration: .375,
                })
                .from(".s5", {
                    opacity: 0,
                    y: 80,
                    stagger: .02,
                    delay: -.71,
                    duration: .575,

                    rotateX: -90,
                }).to(".s5", {
                    opacity: 0,
                    y: -80,
                    rotateX: 90,
                    stagger: .02,
                    duration: .575,
                })
                .from(".s6", {
                    opacity: 0,
                    y: 80,
                    stagger: .02,
                    delay: -.71,
                    duration: .575,

                    rotateX: -90,
                }).to(".s6", {
                    opacity: 0,
                    y: -80,
                    rotateX: 90,
                    stagger: .02,
                    duration: .575,
                })
                .to("#intro-slider", {
                    xPercent: "-100",
                    duration: 1.3,
                }).from(".welcome", {
                    opacity: 0,
                    y: 30,
                    duration: .4,
                    stagger: .05,
                    rotateX: -90

                }).to(".welcome", {
                    opacity: 0,
                    stagger: .05,
                    y: -30,
                    rotateX: 90,
                    duration: .4
                })
                .to(".intro", {
                    // height: "0vh",
                    yPercent: "-100",

                    duration: 1
                })
                .to("#scrn", {
                    height: "0vh",
                    duration: 1
                });
        }, comp)

        return () => cntx.revert()
    }, [])
    return (
        <div id="scrn"
            className='relative h-0 bg-red-900' ref={comp}>
            <div className='intro h-screen w-full ' style={{ letterSpacing: '-.5vw' }}>
                <div
                    id='intro-slider'
                    className=" h-screen p-10 bg-slate-300 absolute font-oswald z-10 flex justify-center items-center flex-col w-full gap-10 font-medium">

                    <h1 className='text-[10vw] overflow-hidden absolute h-1/2 w-full flex justify-center items-center text-emerald-600 ' id='title-1'>
                        {split1.map((element, index) => (
                            (element === " ") ? <span className='s1' key={index}> </span>
                                :
                                <span className='s1 inline-block m-0' key={index}>{element}</span>

                        ))}
                    </h1>
                    <h1 className='text-[10vw]  overflow-hidden absolute h-1/2  w-full flex justify-center items-center text-purple-500' id='title-2'>
                        {split2.map((element, index) => (
                            (element === ' ') ? <span className='s2 
            ' key={index}> </span>
                                :
                                <span className='s2 inline-block' key={index}>{element}</span>

                        ))} </h1>
                    <h1 className='text-[10vw]  overflow-hidden absolute  w-full h-1/2 flex justify-center items-center text-cyan-600' id='title-3'>{split3.map((element, index) => (
                        (element === " ") ? <span className='s3
            ' key={index}> </span>
                            :
                            <span className='s3 inline-block' key={index}>{element}</span>

                    ))}</h1>
                    <h1 className='text-[10vw]  overflow-hidden absolute  w-full h-1/2 flex justify-center items-center text-red-500' id='title-1'>
                        {split4.map((element, index) => (
                            (element === " ") ? <span className='s4' key={index}> </span>
                                :
                                <span className='s4 inline-block m-0' key={index}>{element}</span>

                        ))}
                    </h1>
                    <h1 className='text-[10vw]  overflow-hidden absolute  w-full h-1/2 flex justify-center items-center text-indigo-500' id='title-1'>
                        {split6.map((element, index) => (
                            (element === ' ') ? <span className='s5 inline-block' key={index}> </span>
                                :
                                <span className='s5 inline-block m-0' key={index}>{element}</span>

                        ))}
                    </h1>
                    <h1 className='text-[10vw]  overflow-hidden absolute  w-full h-1/2 flex justify-center items-center text-fuchsia-500' id='title-1'>
                        {split7.map((element, index) => (
                            (element === " ") ? <span className='s6' key={index}> </span>
                                :
                                <span className='s6 inline-block m-0' key={index}>{element}</span>

                        ))}
                    </h1>
                </div>
                <div className='h-screen  flex bg-gray-950 justify-center place-items-center'>
                    <h1 className='text-[10vw] justify-center items-center font-medium text-gray-100 font-oswald'>{split5.map((element, index) => (
                        (element === " ") ? <span className='s4' key={index}> </span>
                            :
                            <span className='welcome inline-block m-0' key={index}>{element}</span>

                    ))}</h1>
                </div>
            </div>
        </div>
    )
}

export default Intro