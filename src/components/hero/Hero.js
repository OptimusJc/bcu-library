import "./hero.modules.css";
import Button from "../buttons/Button";
import Input from "../buttons/Input";

// import hero_image from "../../assets/images/hero_image.jpg";

const Hero = () => {
	return (
		<section className="hero">
			{/* <img src={hero_image} alt="" /> */}
			{/* <h2>Welcome to the BCU Library website!!!</h2> */}
			<p className="display">Search the Library Catalog</p>
			<Button title="search" />
			<Input />
		</section>
	);
};

export default Hero;
