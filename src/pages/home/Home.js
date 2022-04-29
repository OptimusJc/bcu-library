import Hero from "../../components/hero/Hero.js";
import FeaturedSection from "../../components/featured/FeaturedSection";
import Stream from "../../components/stream/Stream.js";
import Personality from "../../components/personality_section/Personality.js";
import ApostleSection from "../../components/apostle-section/ApostleSection.js";
import OtherTitles from "../../components/others-section/OtherTitles.js";
import FeaturedSpecificSection from "../../components/featured-specific-section/FeaturedSpecificSection.js";
import Footer from "../../components/footer/Footer.js";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedSection />
      <Stream />
      <Personality />
      <ApostleSection />
      <OtherTitles />
      <FeaturedSpecificSection />
      <Footer />
    </div>
  );
};

export default Home;
