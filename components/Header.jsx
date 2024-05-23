import Image from "next/image";

export default function Header() {
  return (

    <header className="flex justify-evenly max-sm:flex-col items-center absolute top-0 w-full z-10 ">

      <Image width={100} height={100} className="max-sm:w-[50%] max-md:w-[200px]" src="/logo.png" alt="" />



      <nav className=" max-sm:mt-7">
        <a className="nav-elements max-sm:hidden" href="#services">Home</a>
        <a className="nav-elements" href="#services">Packages</a>
        <a className="nav-elements" href="">Services</a>
        <a className="nav-elements" href="#about">About</a>
      </nav>



      <a href="#footer" className="max-ha:hidden">
        <button className="bg-[#f88034] py-3 px-8 rounded-3xl text-white font-bold max-md:text-[1rem]">Contact us</button>
      </a>

    </header>

  )
}
