// "use client"
// import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";


export default function Hero() {
  // const [width, setWidth] = useState(window.innerWidth);


  return (
    <main className="w-full h-[100dvh]">
      <img src='/socotra16.jpg' className="brightness-50 w-full h-[80vh] top-0 left-0 right-0 absolute bottom-0" alt="" />
      {/* <img src={`${width < 480 ? '/socotra11.jpg' : '/socotra16.jpg'}`} className="brightness-50 w-full h-[100vh] top-0 left-0 right-0 absolute bottom-0" alt="" /> */}


      <div className="w-full h-[100vh] max-sm:flex-col flex items-center justify-center">
        <div className="z-10 w-[50%] max-sm:w-[100%] max-sm:mx-[1rem] max-sm:text-center ml-[4rem]">
          <h2 className="text-[57px] max-sm:text-[32px] text-white font-sans mb-5">Discover the world with us <span className="text-[#f88034]">...</span></h2>
          <h6 className="text-white text-[22px] max-sm:text-sm tracking-wider">specialized in providing all travel services</h6>
        </div>

        <a href="#footer" className="z-10 absolute bottom-7 sm:hidden">
          <button className="bg-[#f88034] py-3 px-12 rounded-lg text-white font-bold max-md:text-[1rem]">Contact us</button>
        </a>

        <div className="z-10 w-[40%] max-sm:hidden">
          <img src="/airplane.png" alt="" />
        </div>


        <div className="max-md:hidden h-[53px] px-[15px] rounded-[0.5rem] cursor-pointer bg-[#0270be] z-10 absolute bottom-10 flex items-center">
          <button className="text-white text-lg">Check our latest offers</button>
          <FaArrowDown className="text-white pl-2 w-6 h-6" />
        </div>


      </div>
    </main>
  )
}
