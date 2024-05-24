// "use client"
// import { useState } from "react";


export default function Hero() {
  // const [width, setWidth] = useState(window.innerWidth);


  return (
    <main className="w-full h-[50dvh] bg-[#003b95]">
      {/* <img src='/socotra16.jpg' className="brightness-50 w-full h-[80vh] top-0 left-0 right-0 absolute bottom-0" alt="" /> */}
      {/* <img src={`${width < 480 ? '/socotra11.jpg' : '/socotra16.jpg'}`} className="brightness-50 w-full h-[100vh] top-0 left-0 right-0 absolute bottom-0" alt="" /> */}


      <div className="w-full h-[100vh] max-sm:flex-col flex items-center justify-center">
        <div className="z-10 w-[50%] max-sm:w-[100%] max-sm:mx-[1rem] max-sm:text-center ml-[4rem] mb-[3rem]">
          <h2 className="text-[50px] max-sm:text-[32px] text-white mb-5 font-extrabold">Discover the world with us <span className="text-[#f88034]">...</span></h2>
        </div>

        <a href="#footer" className="z-10 absolute bottom-7 sm:hidden">
          <button className="bg-[#f88034] py-3 px-12 rounded-lg text-white font-bold max-md:text-[1rem]">Contact us</button>
        </a>

        <div className="z-10 w-[40%] max-sm:hidden">
          <img src="/airplane.png" alt="" />
        </div>


      </div>
    </main>
  )
}
