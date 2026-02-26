import Navbar from "../components/Navbar";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="bg-purple-600  text-gray-800">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <Footer />
    </div>
  );
};

export default LandingPage;