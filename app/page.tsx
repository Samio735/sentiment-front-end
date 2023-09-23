import About from "@/components/About";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TesteMonial from "@/components/TesteMonial";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className=" h-screen overflow-x-hidden p-6">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <TesteMonial />
      <Faq />
      <Footer />
    </main>
  );
}
