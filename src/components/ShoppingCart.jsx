import React from 'react'
import { useSelector } from 'react-redux'

const ShoppingCart = ({chairsData, productsInTheCart, setProductsInTheCart}) => {

  const carts = useSelector(store => store.cart.items)

  return (
    <div className='h-[100vh] w-full flex flex-col justify-start items-center'>
      <h1 className='font-sans font-semibold text-[20px] bg-gradient-to-r from-[#4f03ac] to-[#9a5ae7] text-transparent bg-clip-text'>Shopping Cart</h1>
      <div className='border border-[#57415f] h-[80%] w-[90%] rounded-[10px] flex flex-wrap justify-center items-center overflow-scroll'>
        {
          carts.map(product=>{
            return(
              <>
                <div className={`bg-[#aaaaaa] md:h-[200px] h-[100px] md:w-[300px] w-[200px] m-[10px] rounded-[10px] flex flex-row`}>
                  <div className='h-full w-[40%]'>
                    <img className='md:h-[200px] h-[100px] md:w-[200px] w-[50px]' src={chairsData[product.productId].image} />
                  </div>
                  <div className='h-full w-[60%] flex flex-col justify-start items-center'>
                    <h1 className='bg-gradient-to-r from-[#4f03ac] to-[#9a5ae7] text-transparent bg-clip-text font-sans font-semibold md:text-[15px] text-[10px]'>{chairsData[product.productId].name}</h1>
                    <p className='text-[#57415f] md:text-[15px] text-[7px] flex'>{chairsData[product.productId].description}</p>
                    <p className='font-sans font-semibold md:text-[15px] text-[10px] text-[#36293b]'>{chairsData[product.productId].price}</p>
                    <button className='bg-gradient-to-r from-[#4f03ac] to-[#9a5ae7] text-transparent bg-clip-text text-center flex items-center md:py-5 sm:py-2 justify-center cursor-pointer h-[20px] w-[100px] border rounded-[5px]'>Check Out</button>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </div>
  )
}

export default ShoppingCart
