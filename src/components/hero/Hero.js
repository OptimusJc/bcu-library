import "../../index.css";
import "./hero.modules.css";
import Button from "../buttons/Button";
import Input from "../buttons/Input";
import "../buttons/button.modules.css";

// import hero_image from "../../assets/images/hero_image.jpg";

const Hero = () => {
	return (
		<div className="container_fluid hero">
			<section className="container">
				<div>
					<p className="display">Search the Library Catalog</p>
					<Button title="search" classes="btn btn-search" />
					<Input type="text" placeholder="Search" id="search" />
				</div>
			</section>
		</div>
	);
};

export default Hero;
