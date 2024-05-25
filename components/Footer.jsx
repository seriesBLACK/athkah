import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdAlternateEmail, MdLocalPhone, MdLocationPin, MdOutlineLocalPhone } from "react-icons/md";



export default function Footer() {
  return (
    <footer id="footer" className="absolut bottom-0 w-full bg-[#003b95] h-[30vh] max-sm:h-[auto] rounded-t-lg relative overflow-hidden">
      <div className="grid grid-cols-3 max-sm:flex max-sm:flex-col max-sm:items-center">
        <div className="text-[#fff]">
          <h3 className="font-bold max-sm:text-center text-right text-[2rem] mt-5">مـن نحـن</h3>
          <p className="text-right max-sm:text-center">
            تأسست أذكى هوليديز في عام 2012 مع نمو ناجح ومستمر لتوفير أفضل الحلول والخدمات لوكالات السفر والعملاء في اليمن والشرق الأوسط</p>
        </div>


        <div className="text-white text-center flex flex-col mt-5 font-mono font-semibold max-sm:my-5 max-sm:border-t max-sm:border-b max-sm:py-5 max-sm:w-full">
          <p>let&apos;s stay connected</p>
          <div className="flex gap-2 text-[2rem] mx-auto mt-5">
            <FaFacebook /> <FaInstagram /> <FaWhatsapp />
          </div>
        </div>

        <div className="text-[#fff] flex items-end gap-4 flex-col mt-5 mr-5 max-sm:text-center">

          <div className="flex items-center gap-2 max-sm:">
            <p className="text-center font-semibold">صنعاء - تقاطع شارع الجزائر مع شارع الستين قرب معهد أكسيد للغات </p>
            <MdLocationPin className="w-[30px] h-[30px]" />
          </div>

          <div className="flex items-center bg-re gap-2">
            <p className="font-semibold"> عدن - ساحل أبين مقابل منتجع كراون - أمام مطاعم القوزي </p>
            <MdLocationPin className="w-[30px] h-[30px]" />
          </div>

          <div className="flex items-center gap-2">
            <p className="font-semibold">+967 777010714 - 967 775012012</p>
            <MdOutlineLocalPhone className="w-[30px] h-[30px]" />
          </div>

          <div className="flex items-center gap-2">
            <p className="font-semibold">Info@Athkaholidays.com</p>
            <MdAlternateEmail className="w-[30px] h-[30px]" />
          </div>
        </div>
      </div>
      <div className="h-[1px] w-[40%] max-sm:hidden bg-gray-400 mx-auto"></div>


      <div className="w-full bg-[#003b95] flex items-end justify-center h-[50%] max-sm:h-[20%] absolute">
        <Link
          href='https://aw-portfolio-3-0.vercel.app/'

        >
          <p className="text-white font-thin">Design & developed by <span className="underline font-thin bg-black rounded-full px-1">AW</span></p>

        </Link>
      </div>
    </footer>
  )
};