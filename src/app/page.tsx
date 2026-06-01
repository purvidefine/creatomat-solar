import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Industries from "@/components/sections/Industries";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import Benefits from "@/components/sections/Benefits";
import SolarCalculator from "@/components/sections/SolarCalculator";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <SolarCalculator />
      <About />
      <Services />
      <WhyChooseUs />
      <Industries />
      <Process />
      <Projects />
      <Benefits />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </main>
  );
}
