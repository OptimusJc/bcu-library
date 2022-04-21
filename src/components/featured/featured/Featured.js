import { Link } from "react-router-dom";

import "./Featured.modules.css";
import image1 from "../../../assets/images/pexels.jpg";

const Featured = () => {
	return (
		<div className="featured">
			<h3>Featured</h3>
			<ul>
				<li>
					<Link to="">
						<img
							src={image1}
							alt=""
							aspectRatio={50}
							className="featureImage"
						/>
						<p>This is a featured video by Jose Fanta</p>
						<span>January 2, 2022</span>
					</Link>
				</li>
				<li>
					<Link to="">
						<img
							src={image1}
							alt=""
							aspectRatio={50}
							className="featureImage"
						/>
						<p>This is a featured video by Jose Fanta</p>
						<span>January 2, 2022</span>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Featured;
