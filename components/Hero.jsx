

export default function Hero() {


  return (
    <main id="hero" className="w-full h-[50dvh] max-sm:h-auto bg-[#003b95]">

      <div className="w-full h-[100vh] max-sm:h-[70vh] max-sm:flex-col flex items-center justify-center">
        <div className="z-10 w-[50%] max-sm:w-[100%] max-sm:mx-[1rem] max-sm:text-center ml-[4rem] mb-[3rem]">
          <h2 className="text-[50px] max-sm:text-[32px] max-sm:text-left text-white mb-5 font-extrabold">Discover the world with us <span className="text-[#f88034]">...</span></h2>
        </div>

        <a href="#footer" className="hidden">
          <button className="bg-[#f88034] py-3 px-12 rounded-lg text-white font-bold max-md:text-[1rem]">Contact us</button>
        </a>

        <div className="z-10 w-[40%] max-sm:hidden">
          <img src="/airplane.png" alt="" />
        </div>


      </div>
    </main>
  )
}
