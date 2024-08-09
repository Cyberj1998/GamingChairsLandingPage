import React from 'react'
import ProductCard from './ProductCard'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import ChairModelOptimized from './ChairModelOptimized'

const SecondShoppingSection = ({chairsData}) => {
  
  const lastFour = chairsData.slice(-4)

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


  return (
    <div className='h-[90vh] flex flex-row justify-center items-center'>
      <div className='w-[70%] h-full flex flex-wrap justify-center items-center'>
        {
          lastFour.map(product=>{
            return(
              <ProductCard key={product.name} data={product} />
            )
          })
        }
      </div>
      <div className='model-container w-[30%] h-full bg-transparent overflow-visible'>
            <Canvas 
            className='w-full h-full bg-transparent flex justify-center items-center'
            camera={{ near: 0.1, far: 1000 }}
            >
              <Suspense>
                <directionalLight position={[1, 1, 5]} intensity={3} />
                <ambientLight intensity={0.1} />
                <ChairModelOptimized
                  position={chairModelPosition}
                  scale={chairModelScale}
                  rotation={chairModelrotation}
                 />
              </Suspense>
            </Canvas>
      </div>
    </div>
  )
}

export default SecondShoppingSection
