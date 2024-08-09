import React from 'react'
import thirdChairGroup from './assets/Chairs-group-3.png'

const SecondDivider = () => {
  return (
    <div className='h-[150px] w-full flex flex-row mt-[50px]'>
      <div className='w-[80%] h-full bg-gradient-to-r from-[#a673e5] to-[#37017904] flex justify-end items-center'>
        <img src={thirdChairGroup} className='md:w-[300px] w-[200px] md:h-[300px] h-[200px] mt-[-50px] ml-[-50px]' />
      </div>
      <div className='w-[20%] h-full bg-transparent'></div>
    </div>
  )
}

export default SecondDivider
