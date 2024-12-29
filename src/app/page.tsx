import Hero from "../components/Home/Hero";
// import Features from "../components/Features";
import Services from "../components/Home/Services";
import CaseStudies from "../components/Home/CaseStudies";
import Testimonials from "../components/Home/Testimonials";
import Footer from "../partials/Common/Footer";
import FAQ from "@/components/Home/Faq";
import Work from "@/components/Home/Work";

export default function Home() {
  return (
    <main className="">
      <Hero />
      {/* <Features /> */}
      <Work/>
      <Services />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
