import "./Series.modules.css";
import Card from "../../../components/card/Cards";
import { CgArrowRightO } from "react-icons/cg";
import { CgArrowLeftO } from "react-icons/cg";

const Series = () => {
	return (
		<div>
			<section className="series">
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="row christian-series">
								<div className="col">
									<h3>Christian Series</h3>
									{/* carousel slide  */}
									<div
										className="carousel slide"
										id="carouselExampleControl"
										data-bs-ride="carousel"
									>
										{/* carousel inner  */}
										<div className="carousel-inner">
											<div className="carousel-item active">
												<Card title="hey1" />
											</div>
											<div className="carousel-item">
												<Card title="hey2" />
											</div>
											<div className="carousel-item">
												<Card title="hey3" />
											</div>
											<div className="carousel-item">
												<Card title="hey4" />
											</div>
										</div>
										{/* carousel buttons */}
										<button
											type="button"
											data-bs-target="#carouselExampleControl"
											data-bs-slide="prev"
											className="carousel-control-prev"
										>
											<CgArrowLeftO
												className="carousel-control-prev"
												aria-hidden="true"
											/>
											<span className="visually-hidden">Previous</span>
										</button>
										<button
											type="button"
											data-bs-target="#carouselExampleControl"
											data-bs-slide="next"
											className="carousel-control-next"
										>
											<CgArrowRightO
												className="carousel-control-next"
												aria-hidden="true"
											/>
											<span className="visually-hidden">Next</span>
										</button>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col">
									<h3>DIY Series</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Series;
