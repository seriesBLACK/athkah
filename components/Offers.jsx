import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link"
import OfferCard from "./OfferCard";

export default async function Offers() {

  const listingRef = collection(db, "offers");
  const docSnap = await getDocs(listingRef);
  const data = [];

  docSnap.forEach((doc) => {
    return data.push({
      id: doc.id,
      data: doc.data()
    });
  });


  return (
    <section id="offer" className="w-full">
      <div className="w-[90%] max-sm:w-[95%] mx-auto">
        <h1 className="text-[3rem] mt-12">Where to next ?</h1>
        <p className="mb-3">Enjoy a hassle-free journey with all the information you need to know before your trip</p>

        <div className="w-full flex gap-4 items-center justify-between flex-wrap max-sm:justify-center">

          {data?.map((card) => (
            <Link key={card.id} href={`/offers/${card.id}`}>
              <OfferCard key={card.id} card={card.data} />
            </Link>
          ))}


        </div>


      </div>

    </section>
  )
}


{/* {
            cards.map((card) => (
              <div className={` col-span-${card.span} relative`}>
                <img className="rounded-lg h-[340px] aspect-square" src={`/offers/${card.img}`} alt="" />
                <div className="ml-10">
                  <h3 className="absolute bottom-14 text-white text-[2rem]">{card.place}</h3>
                  <div className="absolute bottom-5 flex w-[80%] items-center justify-between">
                    <p className="text-white text-[1.3rem]">{card.text}</p>
                    <div className="flex items-center gap-2">
                      <p className="text-[#ffffffdd] text-[1.3rem]">Economy from</p>
                      <p className="text-[#fffffff4] text-[1.3rem]">${card.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          } */}