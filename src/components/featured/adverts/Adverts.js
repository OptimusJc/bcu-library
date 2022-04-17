import Carousel from "react-bootstrap/Carousel";
import carousel_image from "../../../assets/images/pexels.jpg";

import "./Adverts.modules.css";

const Adverts = () => {
	return (
		<Carousel fade>
			<Carousel.Item>
				<img className="d-block w-100" src={carousel_image} alt="First slide" />

				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={carousel_image}
					alt="Second slide"
				/>

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={carousel_image} alt="Third slide" />

				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default Adverts;
