import React from 'react'
import instagram from './assets/instagram.svg'
import twitter from './assets/twitter.svg'
import tiktok from './assets/tiktok.svg'

const Footer = () => {
  return (
    <footer id="footer" className="h-[200px] w-full bg-[#121212] flex justify-center items-start md:flex-row flex-col mt-[50px]">
            <div id="left_footer" className="md:h-[100%] h-[50%] md:w-[50%] w-full">
                <p id="slogan" className="ml-[10px] font-sans font-semibold md:text-[12px] text-[10px] w-[200px] text-[#898989]">Elevate your Gaming experience with us right now</p>
                <div id="socials_container" className="md:h-[50px] h-[20px] w-[150px] flex justify-evenly items-center flex-row">
                    <img id="instagram" className="md:h-[20px] h-[15px] md:w-[30]px w-[15px]" src={instagram} />
                    <img id="telegram" className="md:h-[20px] h-[15px] md:w-[30]px w-[15px]" src={twitter} />
                    <img id="telegram" className="md:h-[20px] h-[15px] md:w-[30]px w-[15px]" src={tiktok} />
                </div>
            </div>
            <div id="right_footer" className="md:h-[100%] h-[50%] md:w-[50%] w-full flex justify-evenly items-start flex-row">
                <div id="footer_help">
                    <h1 className="font-sans font-semibold text-[#898989] md:text-[20px] text-[15px]">Help</h1>
                    <ul>
                        <li className="text-[#565656] font-sans font-semibold md:text-[15px] text-[10px] cursor-pointer">About us</li>
                        <li className="text-[#565656] font-sans font-semibold md:text-[15px] text-[10px] cursor-pointer">FAQs</li>
                        <li className="text-[#565656] font-sans font-semibold md:text-[15px] text-[10px] cursor-pointer">How it works</li>
                        <li className="text-[#565656] font-sans font-semibold md:text-[15px] text-[10px] cursor-pointer">Privacy policy</li>
                        <li className="text-[#565656] font-sans font-semibold md:text-[15px] text-[10px] cursor-pointer">Payment policy</li>
                    </ul>
                </div>
                <div id="footer_contact">
                    <h1 className="font-sans font-semibold text-[#898989] text-[20px]">Contact</h1>
                    <ul>
                        <li className="text-[#565656] font-sans font-semibold md:text-[15px] text-[10px] cursor-pointer">customer@GamingChairs.com</li>
                        <li className="text-[#565656] font-sans font-semibold md:text-[15px] text-[10px] cursor-pointer">+92459456</li>
                    </ul>
                </div>
            </div>
        </footer>
  )
}

export default Footer
