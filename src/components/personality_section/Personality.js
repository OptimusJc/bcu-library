import "./Personality.modules.css";
import Button from "../buttons/Button";

const Personality = () => {
	return (
		<section>
			<div className="person_image">
				<img src="" alt="" />
			</div>
			<div className="person_bio">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur
				</p>

				<Button title="Read More" className="read-more" />
			</div>
		</section>
	);
};

export default Personality;
