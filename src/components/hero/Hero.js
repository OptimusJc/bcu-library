import "../../index.css";
import "./hero.modules.css";
import Button from "../buttons/Button";
import Input from "../buttons/Input";
import '../buttons/button.modules.css';

// import hero_image from "../../assets/images/hero_image.jpg";

const Hero = () => {
	return (
		<div className="container_fluid">
			<section className="hero">
				<p className="display">Search the Library Catalog</p>
				<Button title="search" classes="btn btn-search" />
				<Input />
			</section>
		</div>
	);
};

export default Hero;
