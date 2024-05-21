import { MdFlightTakeoff, MdLocationPin } from "react-icons/md"


export default function OfferDetails({ params }) {
  return (
    <div className="w-full h-screen bg-[url('/offers/offers-details/maldiv.jpg')] brightness-50">
      <h1 className="text-center text-[2rem] font-semibold text-[#45371b]">Enjoy a hassle-free journey with all the information you need to know before your trip</h1>
      <div className=" ml-[5rem]">

        <h2 className="text-white text-[1.5rem] mt-[1rem]">
          The World's Leading Destination
          2020, 2021, 2022 & 2023</h2>
        <div className="flex my-[2rem] items-center gap-2 text-[#ffffffb9] text-[1.2rem]">
          <MdLocationPin />
          Republic of Maldives
        </div>


        <div className="flex items-center mb-[2rem] text-[1.2rem] gap-2 h-[55px] w-[226px] justify-center rounded-[0.2rem] cursor-pointer bg-[#ffa903]">
          <button>Show flights</button>
          <MdFlightTakeoff />
        </div>

        <div className="text-white">
          <span className="font-bold">Package Description:</span> <br />
          -star hotel for 4 nights and 5 days in the Maldives in the middle of the sea, including free meals. <br />
          -Transportation from the airport to the hotel and vice versa. <br />
          -Aden, Cairo, Aden travel tickets. <br />
          -Travel tickets Cairo Maldives Cairo.
        </div>
      </div>
    </div>
  )
}
