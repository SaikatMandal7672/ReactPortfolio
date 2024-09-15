import React from 'react';
import { MARQUEE_TEXT } from '../constants/index';
import { motion } from "framer-motion";

const Marquee = () => {
    return (
        <div className='w-full bg-lime-300 mt-4 text-black lg:py-6'>
            <div className="flex overflow-hidden whitespace-nowrap">
                {
                    [...Array(2)].map((_,i)=>(
                        <motion.h1
                        initial={{x:"-100%"}}
                        animate={{x:"0"}}
                        transition={{repeat:Infinity,ease:"linear", duration:20}}
                        key={i} className='py-2 text-3xl tracking-tighter font-bold leading-none lg:text-7xl'>
                            {MARQUEE_TEXT}
                        </motion.h1>
                    ))
                }
            </div>
        </div>
    )
}

export default Marquee