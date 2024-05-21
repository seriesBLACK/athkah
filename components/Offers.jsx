export default function Offers() {

  const cards = [
    {
      id: 1,
      img: "1.png",
      place: "Beirut",
      price: "985",
      text: "985",

    },
    {
      id: 2,
      img: '2.png',
      place: "Maldive ",
      price: "1815",
      text: "4 nights and 5 days",

    },
    {
      id: 3,
      img: '3.png',
      place: "Socotra",
      price: "1054",
      text: "for 6 nights 7 days",

    },
    {
      id: 4,
      img: '4.png',
      place: "Malaysia",
      price: "1750",
      text: "for 6 nights 7 days",

    },
    {
      id: 5,
      img: '5.png',
      place: "Indonesia",
      price: "1675",
      text: "for 6 nights 7 days",

    },
    {
      id: 6,
      img: '6.png',
      place: "Sharm El-Shaikh",
      price: "1054",
      text: "Tickets via Yemenia",

    },

  ]
  // bg-[#f2f3fa]
  return (
    <section id="offers-section" className="w-full">
      <div className="w-[90%] mx-auto">
        <h1 className="text-[3rem] my-12">Where to next ?</h1>
        <div className="w-full flex gap-4 items-center justify-between flex-wrap max-sm:justify-center">

          {cards.map((card) => (
            <div id="card" key={card.id} className=" w-[400px] relative rounded-lg shadow-2xl">
              <img src={`/offers/${card.img}`} className=" aspect-square w-full rounded" alt="" />
              <div className="w-full px-3 pt-12 h-[40%] absolute bottom-0 bg-gradient-to-t from-black to-[#00000018] rounded-lg">
                <h4 className="text-white text-[2rem]">{card.place}</h4>
                <div className="flex w-full justify-between mt-7">
                  <p className="text-[#ffffffb6] text-[1.2rem]">23 May 2024 - 28 May 2024</p>
                  <p className="text-[#ffffffb6] text-[1.2rem]">from ${card.price}</p>
                </div>
              </div>
            </div>
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