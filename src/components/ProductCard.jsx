import React from 'react'
import cartIcon from './assets/cart.png'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from './Store/cart'

const ProductCard = (props) => {
  const carts = useSelector(store => store.cart.items)

  const {name, prize, description, image, key } = props.data

  const dispatch = useDispatch()
  
  const handleAddToCart = () => {
    dispatch(addToCart({
      productId: key,
      quantity: 1
    }))
    console.log(carts)
  }


  return (

    <div className={`bg-[#aaaaaa] md:h-[200px] h-[100px] md:w-[300px] w-[200px] m-[10px] rounded-[10px] flex flex-row`} key={key}>
      <div className='h-full w-[40%]'>
        <img className='md:h-[200px] h-[100px] md:w-[200px] w-[50px]' src={image} />
      </div>
      <div className='h-full w-[60%] flex flex-col justify-start items-center'>
        <h1 className='bg-gradient-to-r from-[#4f03ac] to-[#9a5ae7] text-transparent bg-clip-text font-sans font-semibold md:text-[15px] text-[10px]'>{name}</h1>
        <p className='text-[#57415f] md:text-[15px] text-[7px] flex'>{description}</p>
        <p className='font-sans font-semibold md:text-[15px] text-[10px] text-[#36293b]'>{prize}</p>
        <button onClick={handleAddToCart} className="font-sans font-semibold text-[#fff] text-[13px] bg-[#939393] p-[5px] rounded-[5px] flex flex-row justify-center items-center z-10 w-fit">Add To <span className="bg-gradient-to-r from-[#4f03ac] to-[#9a5ae7] text-transparent bg-clip-text">Cart</span> <img id="cart" src={cartIcon} className="h-[12px] w-[12px] ml-[5px]" alt="cart" /></button>
      </div>
    </div>
  )
}


export default ProductCard
