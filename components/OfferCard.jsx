import { BsArrowUpRight } from "react-icons/bs";

export default function OfferCard({ card }) {
  return (
    <div id="card" className="group w-[400px] relative rounded-lg shadow-2xl">

      <div className="absolute flex items-center gap-2 w-full justify-center h-full hover:bg-[#00000071] z-20 transition-all cursor-pointer">
        <p className="text-white text-[1.4rem]  hidden group-hover:inline z-30">See all details</p>
        <BsArrowUpRight className="text-white text-[1.4rem] hidden group-hover:inline" />
      </div>

      <img src={card.image} className="hover:hidden aspect-square w-full rounded" alt="" />
      <div className="w-full px-3 pt-12 h-[40%] absolute bottom-0 bg-gradient-to-t from-black to-[#00000018] rounded-lg">

        <h4 className="text-white text-[2rem]">{card.country}</h4>
        <div className="flex w-full justify-between mt-7">
          <p className="text-[#ffffffb6] text-[1.2rem]">23 May 2024 - 28 May 2024</p>
          <p className="text-[#ffffffb6] text-[1.2rem]">from ${card.price}</p>
        </div>
      </div>

    </div>
  )
}
