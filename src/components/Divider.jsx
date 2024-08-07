import React from 'react'
import ChairsGroup2 from './assets/Chairs-group-1.png'

const Divider = () => {
  return (
    <div className='h-[150px] w-full flex flex-row'>
      <div className='w-[20%] h-full bg-transparent'></div>
      <div className='w-[80%] h-full bg-gradient-to-l from-[#a673e5] to-[#37017904] flex justify-start items-center'>
        <img src={ChairsGroup2} className='md:w-[300px] w-[200px] md:h-[300px] h-[200px] mt-[-100px] ml-[-50px]' />
      </div>
    </div>
  )
}

export default Divider
