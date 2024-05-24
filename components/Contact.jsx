
export default function Contact() {
  return (
    <section className="w-full h-[100vh]">
      <div className="w-[1162px] mx-auto rounded-[3rem] h-[400px] bg-[url('/services/contact.png')] bg-center bg-cover flex">
        <div className="h-full w-[50%]"></div>
        <div className="w-[42%] ml-10 h-full flex flex-col">
          <h4 className="text-[2rem] text-white mt-6">Never miss an offer</h4>
          <p className="text-white mb-6 ">Write your email to get updates on new offers</p>

          <input className="bg-white border-[1px] h-[52px] pl-2 rounded-md" type="email" required placeholder="Email address" name="email" />
          <p className="mt-[24px] text-white font-mono">you would get offers and news from Athkah holidays !</p>
          <button className="bg-tranparent mt-[24px] w-fit text-[#9f9e9e] border py-[16px] px-[32px] rounded-[2rem] text-xl cursor-pointer">send email</button>

        </div>
      </div>
    </section>
  )
}
