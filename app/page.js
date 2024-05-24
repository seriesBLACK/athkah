import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Offers from "@/components/Offers";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Offers />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
