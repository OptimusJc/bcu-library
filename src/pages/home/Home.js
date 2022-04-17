import Hero from "../../components/hero/Hero.js";
import FeaturedSection from "../../components/featured/FeaturedSection";
import Stream from "../../components/stream/Stream.js";
import Personality from "../../components/personality_section/Personality.js";

const Home = () => {
	return (
		<div>
			<Hero />
			<FeaturedSection />
			<Stream />
			<Personality />
		</div>
	);
};

export default Home;
