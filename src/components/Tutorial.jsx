import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'


const Tutorial = ({dark}) => {

  const codeString = `
    let URL = 'https://gamingchairsapi.onrender.com/gamingChairs'

    fetch(URL).then(res => res.json()).then(data => {
        console.log(data)
    })
  `
  const codeStrinJson = `
    [
    {
        "name": "Evil Geniuses Gaming Chair",
        "prize": "$199.99",
        "description": "Ergonomic design with lumbar support and adjustable armrests for long gaming sessions.",
        "image": "./assets/Gaming-Chair-1",
        "key": 0
    },
    {
        "name": "WOW Gaming Chair",
        "prize": "$249.99",
        "description": "High-back racing style chair with breathable mesh and headrest for superior comfort.",
        "image": "./assets/Gaming-Chair-2",
        "key": 1
    },
    {
        "name": "Team Secret Gaming Chair",
        "prize": "$179.99",
        "description": "Sleek black gaming chair with ergonomic design and padded seat for extended gaming sessions.",
        "image": "./assets/Gaming-Chair-3",
        "key": 2
    },
    .......
  `

  return (
    <div className='h-[90vh] w-full flex justify-center items-center flex-col'>
        <h1 className={`font-sans font-semibold text-[30px] ${dark == true ? 'text-[#a1a1a1]' : 'text-[#57415f]'}`}><span className='bg-gradient-to-r from-[#4f03ac] to-[#9a5ae7] text-transparent bg-clip-text'>API</span> call example</h1>
        <p className={`${dark == true ? 'text-[#727272]' : 'text-[#57415f]'} text-center font-sans font-semibold md:w-[50%] w-[80%] md:text-[15px] text-[12px] mb-5`}>this is a very simple-to-use API but we still thought to include <br /> this little example of the call and response.</p>
        <div className='h-[70%] w-[80%] flex md:flex-row flex-col justify-center items-center'>
           <SyntaxHighlighter language='jsx' style={atomOneDark} customStyle={{padding: "10px"}} className="rounded-[10px] md:w-[50%] h-full  w-[90%] m-10" >
                {codeString}
           </SyntaxHighlighter>
           <SyntaxHighlighter language='json' style={atomOneDark} customStyle={{padding: "10px"}} className="rounded-[10px] md:w-[50%] w-[90%] h-full m-10" >
                {codeStrinJson}
           </SyntaxHighlighter>
        </div>
    </div>
  )
}

export default Tutorial
