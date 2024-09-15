import { useState } from 'react'
import { useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { LINKS } from "../constants/index.jsx";
import { AnimatePresence, motion } from "framer-motion";


function Nav() {
  const [isopen, setIsopen] = useState(false)

  const toggleMenu = () => {
    setIsopen(!isopen)
  }

  useEffect(() => {
    if (!isopen) {
      document.body.style.overflow = "auto"
    } else {
      document.body.style.overflow = "hidden"
    }
  }, [isopen])

  const containerVariansts = {
    hidden: { opacity: 0, y: "-100%" },
    visible: { opacity: 1, y: 0, transition: { staggerChildern: .1 } },

  }
  const linkVariansts = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },

  }
  return (
    <div>
      <nav className='p-4 top-0 right-0 fixed z-50'>
        <button onClick={toggleMenu} className='rounded-md p-2'>
          {
            isopen ? (<FaTimes className="h-6 w-6" />) : (<FaBars className='w-6 h-6' />)
          }
        </button>
      </nav>
      <AnimatePresence>
        {
          isopen && (
            <motion.div
            initial="hidden"
             animate="visible"
             exit="hidden"
             variants={containerVariansts}
             className='fixed inset-0 z-20 flex flex-col items-center justify-center bg-black text-white'>
              <ul className="space-y-6 text-3xl">
                {LINKS.map((link) => (
                  <motion.li
                  variants={linkVariansts}
                   key={link.id}>
                    <a href={`#${link.id}`}
                      onClick={toggleMenu}
                      className='text-5xl font-semibold uppercase tracking-wide hover:text-lime-300 lg:text-9xl'
                    >
                      {
                        link.name
                      }
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )
        }
      </AnimatePresence>
    </div>
  )
}

export default Nav