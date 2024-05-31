
export default function Contact() {
  return (
    <section className="w-full mb-[5rem]">
      <div className="contact-container">
        <div className="h-full w-[50%] max-sm:hidden"></div>
        <div className="w-[50%] rounded-[1rem] max-sm:w-full ml-10 max-sm:mx-5 h-full flex flex-col max-sm:justify-end">
          <h4 className="text-[2rem] text-white mt-6 max-sm:mt-2 max-sm:text-[1.5rem]">Never miss an offer</h4>
          <p className="text-white mb-6 max-sm:mb-2">get updates on new offers</p>

          <input className="bg-white border-[1px] w-[70%] max-sm:w-full h-[52px] pl-2 rounded-md" type="email" required placeholder="Email address" name="email" />
          <p className="mt-[24px] max-sm:mt-3 text-white font-mono">you would get offers and news from Athkah holidays !</p>
          <button className="bg-tranparent mt-[24px] max-sm:mt-3 max-sm:mb-5 w-fit text-[#9f9e9e] max-sm:w-full border py-[16px] px-[32px] max-sm:py-[12px] rounded-[2rem] text-xl max-sm:text-lg cursor-pointer">send email</button>

        </div>
      </div>
    </section>
  )
}
