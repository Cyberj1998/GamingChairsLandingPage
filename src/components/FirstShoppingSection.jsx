import React from 'react'
import ProductCard from './ProductCard'
import { useEffect } from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import CompressedChair from './CompressedChair'

const FirstShoppingSection = ({dark, chairsData, setChairsData}) => {

  let URL = 'https://gamingchairsapi.onrender.com/gamingChairs'

  const adjustChairModelForScreen = () => {
    let screenScale = null
    let screenPosition = [0, -20, -40]
    let rotation = [0, -0.5, 0]
    
    if(window.innerWidth < 768){
      screenScale = [20, 20, 20]
    }
    else{
      screenScale = [35, 35, 35]
    }

    return [screenScale, screenPosition, rotation]
  }

  const [chairModelScale, chairModelPosition, chairModelrotation] = adjustChairModelForScreen()

  const fetchData = () => {
    fetch(URL).then(res => res.json()).then(data =>{
      console.log(data)
      setChairsData(data)
    })
  }

  const firstFour = chairsData.slice(0, 4)

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div className='h-[90vh] flex flex-row justify-center items-center'>
      <div className='model-container w-[30%] h-full bg-transparent flex justify-center items-center overflow-visible'>
            <Canvas 
            className='w-full h-full bg-transparent flex justify-center items-center'
            camera={{ near: 0.1, far: 1000 }}
            >
              <Suspense>
                <directionalLight position={[1, 1, 5]} intensity={5} />
                <ambientLight intensity={0.1} />
                <CompressedChair
                  position={chairModelPosition}
                  scale={chairModelScale}
                  rotation={chairModelrotation}
                 />
              </Suspense>
            </Canvas>
      </div>
      <div className='w-[70%] h-full flex flex-wrap justify-center items-center'>
        {
          firstFour.map(product=>{
            return(
              <ProductCard key={product.name} data={product} />
            )
          })
        }
      </div>
    </div>
  )
}

export default FirstShoppingSection
