import Hero from "../components/Hero";
import Features from "../components/Features";
import Services from "../components/Services";
import CaseStudies from "../components/CaseStudies";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero />
        <Features />
        <Services />
        <CaseStudies />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}
