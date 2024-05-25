import Contact from "@/components/Contact";
import { FloatingNav } from "@/components/FloatingNav";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Offers from "@/components/Offers";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <FloatingNav />
      <Hero />
      <Offers />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
