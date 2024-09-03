import React from 'react'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import ChairsGroup from './assets/Chairs-group-2.png'
import clipboardIcon from './assets/clipboard.png'
import {
   headContainerAnimation,
   headContentAnimation,
   headTextAnimation,
   slideAnimation
 } from '../config/motion'

const variants = {
    hidden:{opacity: 0},
    visible:{opacity: 1}
  }

const Hero = ({dark, setDark}) => {

    const inputRef = useRef(null)

    const handleClick = () => {
        if(inputRef.current) {
            inputRef.current.select()
            document.execCommand('copy')
        }
    }

  return (
    <div className='h-[90vh] w-full flex flex-col justify-start items-center'>
        <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{
           delay: 0.5,
           ease: "easeInOut",
           duration: 0.5
        }}
        viewport={
           {amount: 0}
        }
        >
            <img src={ChairsGroup} className='md:h-[300px] md:w-[500px] h-[250px] w-[250px]' />
        </motion.div>
        <motion.div
        {...headTextAnimation}
        >
            <h1 className={`text-[30px] font-sans font-semibold ${dark == true ? 'text-[#a1a1a1]' : 'text-[#57415f]'}`}>Gaming Chairs <span className='bg-gradient-to-r from-[#4f03ac] to-[#9a5ae7] text-transparent bg-clip-text'>API</span></h1>
        </motion.div>
        <motion.div
        className='flex w-full justify-center'
        {...slideAnimation('left')}
        >
            <p className={`${dark == true ? 'text-[#727272]' : 'text-[#57415f]'} text-center font-sans font-semibold md:w-[50%] w-[80%] md:text-[15px] text-[12px]`}>Tired of lorem ipsum data? Here is a simple but easy-to-use free <span className='bg-gradient-to-r from-[#4f03ac] to-[#9a5ae7] text-transparent bg-clip-text'>API</span> that you can use to develop your project with <span className='bg-gradient-to-r from-[#4f03ac] to-[#9a5ae7] text-transparent bg-clip-text'>Real-Data</span>. You will get images, names of the products, prices, and descriptions. <span className='bg-gradient-to-r from-[#4f03ac] to-[#9a5ae7] text-transparent bg-clip-text'>Right now</span>, we only have one endpoint, but we are working to add many more in the <span className='bg-gradient-to-r from-[#4f03ac] to-[#9a5ae7] text-transparent bg-clip-text'>Future</span>. Feel free to use our gaming chairs API, this page is an example of the amazing things that you can build{'\u{1F680}'}</p>
        </motion.div>
        <motion.div
         className='flex flex-row justify-center items-center w-fit'
         {...headContentAnimation}
         >
            <input className={`md:w-[400px] w-[300px] rounded-[5px] bg-transparent border-[1px] border-[#57415f] ${dark == true ? 'text-white' : ''}`} ref={inputRef} value="https://gamingchairsapi.onrender.com/gamingChairs" readOnly />
            <button onClick={handleClick} className='w-[30px] h-[30px] border border-[#57415f] rounded-[5px] flex justify-center items-center'><img src={clipboardIcon} className='w-[20px] h-[20px]' /></button>
        </motion.div>
    </div>
  )
}

export default Hero
