import { MdFlightTakeoff, MdLocationPin } from "react-icons/md";
import { josefin } from "../../fonts";
import { RiArrowGoBackFill } from "react-icons/ri";
import Link from "next/link";
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";


export default async function OfferDetails({ params }) {
  const docRef = doc(db, "offers", params.id);
  let docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    docSnap = docSnap.data();
  } else {
    //will be undefined in this case
    console.log("No such document!");
  }
  return (

    <div id="overlay" className={`w-full h-screen ${josefin.className} relative bg-[url('/offers/details/bg.jpg')] bg-no-repeat bg-cover bg-center`}>
      <Link href={'/'}>
        <RiArrowGoBackFill className="absolute text-white top-3 left-3 w-[50px] h-[50px] m-5 p-3 z-10 rounded-full cursor-pointer bg-[#0000003f]" />
      </Link>
      <h1 className="text-center text-[2rem] font-[700] text-[#ffa903]">{docSnap.about}</h1>
      <div className=" w-[70%] h-[50%] mt-[7rem] mx-auto flex flex-col items-end ">

        <div className="flex my-[2rem] items-center gap-2 text-[#ffffffb9] text-[1.2rem]">
          {docSnap.country}
          <MdLocationPin />
        </div>


        <div className="flex items-center mb-[2rem] text-[1.2rem] gap-2 h-[55px] w-[226px] justify-center rounded-[0.2rem] cursor-pointer bg-[#ffa903]">
          <MdFlightTakeoff />
          <button className="py-3 font-bold">الرحلات</button>
        </div>

        <p className="text-white text-right">
          <span className="font-bold">:يتضمن البرنامج</span> <br />
          {docSnap.description}
        </p>
        <p className="text-white font-bold my-3">${docSnap.price}</p>
        <button className="bg-[#003b95] text-cyan-50 py-3 px-12 rounded-lg font-bold mt-5">أحجز الآن</button>
      </div>
    </div>

  )
}
