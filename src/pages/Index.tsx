
import Hero from "@/components/Hero";
import WhatIsIt from "@/components/WhatIsIt";
import HowItWorks from "@/components/HowItWorks";
import WhyUseIt from "@/components/WhyUseIt";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhatIsIt />
      <HowItWorks />
      <WhyUseIt />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
