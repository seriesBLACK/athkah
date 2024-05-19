import Head from "next/head";
import Image from "next/image";

export default function Header() {
  return (

    <header className="flex justify-evenly items-center absolute top-0 w-full">

      <Image width={300} height={300} className="max-sm:w-[30%] max-md:w-[200px]" src="/logo.png" alt="" />


      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"
        />
      </Head>
      <nav className="">
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
