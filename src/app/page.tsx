import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Contact from "@/components/Help/Contact";
import Hero from "@/components/Hero/Hero";
import Product from "@/components/Product/Product";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <>
      <Header />
      <Contact />
      <Hero />
      <Services />
      <Product />
      <Footer />
    </>
  );
}
