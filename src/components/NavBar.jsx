import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Cart from './assets/cart.png'
import { Link } from 'react-router-dom'

const NavBar = ({dark, setDark}) => {

    const handleTheme = () => {
        if(dark === false){
            setDark(true)
        }
        else{
            setDark(false)
        }
    }

    const[totalQuantity, setTotalQuantity]=useState(0)
    const carts = useSelector(store => store.cart.items)
    useEffect(()=>{
        let total = 0;
        carts.forEach(item => total += item.quantity);
        setTotalQuantity(total);
    },[carts])

  return (
    <div className='h-[50px] w-full bg-transparent flex flex-row justify-end items-center absolute'>
        <div className={`${dark == true ? 'bg-[#bababa]' : 'bg-[#57415f]'} h-[30px] w-[30px] rounded-full mr-[10px] cursor-pointer`} onClick={handleTheme}></div>
        <Link to="/cart" className='h-[50px] w-[50px] flex flex-row justify-center items-center'>
            <img src={Cart} className='h-[25px]' />
            <span className={`font-sans font-semibold ${dark == true ? 'text-[#bababa]' : 'text-[#57415f]'} text-[20px] `}>{totalQuantity}</span>
        </Link>
    </div>
  )
}

export default NavBar
