
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import TechnicalCapabilities from "../components/TechnicalCapabilities";
import SocialProof from "../components/SocialProof";
import FinalCTA from "../components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Benefits />
      <HowItWorks />
      <Features />
      <TechnicalCapabilities />
      <SocialProof />
      <FinalCTA />
    </div>
  );
};

export default Index;
