import { Link } from "react-router-dom";
import "./Personality.modules.css";

const Personality = () => {
	return (
		<section className="container">
			<div className="personality-section">
				<div className="person_image">
					<img src="https://via.placeholder.com/400x400" alt="" />
				</div>
				<div className="person_bio animate__animated animate__bounce">
					<h3>personality of the week</h3>
					<h4>dr. flinstones</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur
					</p>

					{/* <Button title="Read More" classes="read-more" /> */}
					<Link className="read_more" to="/read-more">
						Read More
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Personality;
