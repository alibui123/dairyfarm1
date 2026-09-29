import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MilkFlow } from "@/components/MilkFlow";
import { FarmStory } from "@/components/FarmStory";
import { FarmProcess } from "@/components/FarmProcess";
import { WhyAlShukr } from "@/components/WhyAlShukr";
import { AnimalCare } from "@/components/AnimalCare";
import { CustomerJourney } from "@/components/CustomerJourney";
import { TrustSection } from "@/components/TrustSection";
import { FreshMilkCTA } from "@/components/FreshMilkCTA";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <MilkFlow />
      <Hero />
      <FarmStory />
      <FarmProcess />
      <WhyAlShukr />
      <AnimalCare />
      <CustomerJourney />
      <TrustSection />
      <FreshMilkCTA />
      <FinalCTA />
      <Footer />
    </main>
  );
}
