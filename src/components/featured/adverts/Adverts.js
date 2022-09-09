import image1 from "../../../assets/images/adverts_slides/slide1_compressed.jpg";
import image2 from "../../../assets/images/adverts_slides/slide2_compressed.jpg";
import image3 from "../../../assets/images/adverts_slides/slide3_compressed.jpg";

import "./Adverts.modules.css";

const Adverts = () => {
	return (
		<div className="advert">
			<h3 className={["animate__animated", "animate__wobble"].join(" ")}>
				Bcu Adverts
			</h3>

			<div
				id="carouselExampleCaptions"
				className={["carousel", "slide", "carousel_container"].join(" ")}
				data-bs-ride="carousel"
			>
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="0"
						className="active"
						aria-current="true"
						aria-label="Slide 1"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="1"
						aria-label="Slide 2"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="2"
						aria-label="Slide 3"
					></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							src={image1}
							width="600px"
							height="400px"
							className="d-block w-100"
							alt="..."
						/>
						<div
							className={[
								"carousel-caption",
								"d-md-block",
								"d-none",
								"carousel_caption",
							].join(" ")}
						>
							<h5>First slide label</h5>
							<p>
								Some representative placeholder content for the first slide.
							</p>
						</div>
					</div>
					<div className="carousel-item">
						<img
							src={image2}
							width="600px"
							height="400px"
							className="d-block w-100"
							alt="..."
						/>
						<div
							className={[
								"carousel-caption",
								"d-md-block",
								"d-none",
								"carousel_caption",
							].join(" ")}
						>
							<h5>Second slide label</h5>
							<p>
								Some representative placeholder content for the second slide.
							</p>
						</div>
					</div>
					<div className="carousel-item">
						<img
							src={image3}
							width="600px"
							height="400px"
							className="d-block w-100"
							alt="..."
						/>
						<div
							className={[
								"carousel-caption",
								"d-md-block",
								"d-none",
								"carousel_caption",
							].join(" ")}
						>
							<h5>Third slide label</h5>
							<p>
								Some representative placeholder content for the third slide.
							</p>
						</div>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	);
};

export default Adverts;
