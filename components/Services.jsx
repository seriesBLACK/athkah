import { LiaCcVisa } from "react-icons/lia"
import { FaRegAddressCard } from "react-icons/fa"
import { RiHotelLine } from "react-icons/ri"
export default function Services() {
  return (
    <section id="services" className="h-[50vh] w-full">
      <div className="w-[90%] mx-auto">
        <h1 className="text-[3rem] mt-12">Our Services</h1>
        <p className="mb-12">Enjoy online-exclusive benefits when you book directly with us</p>

        <div className="w-full flex gap-4 items-center justify-between flex-wrap max-sm:justify-center">

          <div className="flex items-center gap-2 ">
            <LiaCcVisa className="w-[100px] h-[100px]" />
            <div>
              <h2 className="font-bold text-[1.2rem]">Get Your visa:</h2>
              <p>with athkah you can get your visa card</p>
            </div>
          </div>
          <div className="flex items-center gap-2 ">
            <FaRegAddressCard className="w-[90px] h-[90px]" />
            <div>
              <h2 className="font-bold text-[1.2rem]">Get Your driver license:</h2>
              <p>Get an international driving license with Athkah</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <RiHotelLine className="w-[100px] h-[100px]" />
            <div>
              <h2 className="font-bold text-[1.2rem]">Book your hotel:</h2>
              <p>Any where in the world you can get all your essantials</p>
            </div>
          </div>


        </div>


      </div>
    </section>
  )
}
//<LiaCcVisa /> <FaRegAddressCard /> <FaHotel />