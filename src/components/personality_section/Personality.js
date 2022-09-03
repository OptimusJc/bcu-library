import { Link } from "react-router-dom";
import "./Personality.modules.css";
import bishopImage from "../../assets/images/personalities/paster-td-jakes_compressed.jpg";

const Personality = () => {
	return (
		<section className="container">
			<div className="personality-section">
				<div className="person_image">
					<img
						src={
							bishopImage ? bishopImage : "https://via.placeholder.com/400x400"
						}
						alt=""
					/>
				</div>
				<div className="person_bio animate__animated animate__bounce">
					<h3>personality of the week</h3>
					<h4>Bishop T.D Jakes</h4>
					<p>
						Bishop T.D. Jakes, one of the world’s most revered masterminds,
						leverages his pioneering vision and instinct to serve others in
						areas extending beyond the church. In order to help lead people to
						their destiny, you have to meet people where they are in life.
					</p>

					{/* <Button title="Read More" classes="read-more" /> */}
					<Link className="read_more" to="/read-more">
						More Information
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Personality;
