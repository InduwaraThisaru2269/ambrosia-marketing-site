import Header from "@/components/header";
import Hero from "@/components/hero";
import ProblemSection from "@/components/problem-section";
import CoreFeatures from "@/components/core-features";
import HowItWorks from "@/components/how-it-works";
import RestFeatures from "@/components/rest-features";
import ValueSection from "@/components/value-section";
import WaitlistSection from "@/components/waitlist-section";
import Footer from "@/components/footer";
import PlansSection from "@/components/plans-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProblemSection />
      <CoreFeatures />
      <RestFeatures />
      <HowItWorks />
      <ValueSection />
      <PlansSection />
      <WaitlistSection />
      <Footer />
    </main>
  );
}
