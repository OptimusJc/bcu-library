import "./SupportUs.modules.css";

import image1 from "../../assets/images/carousel/image6.jpeg";
import image2 from "../../assets/images/carousel/image4.jpg";
import image3 from "../../assets/images/carousel/image6.jpeg";
import image4 from "../../assets/images/carousel/image7.jpg";
import image5 from "../../assets/images/carousel/image8.jpg";
import image6 from "../../assets/images/carousel/image9.jpg";

function SupportUs() {
	const PAYPAL_URL =
		"https://www.paypal.com/donate?token=yMcDPjajjAN23JeCs-AkGmdA5eAlK0Gz9uanACz6OEZK3mHXq_yrnm26VN1ksVdV3fUj4exx0WutKpuQ";

	return (
		<div>
			<section className="supportus_hero_section">
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="supportus_hero">
								<div className="supportus_hero_body">
									<h6 className="h6 supportus_hero_subtitle">
										BCU Partnership Program
									</h6>
									<p className="supportus_hero_title">
										"BCU... brethren can unite to fulfill the greatest
										commandment; to love by action.{" "}
										<span>
											Partner with BCU, Body of Christ United Global movement"
										</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="supportus_give">
				<div className="container">
					<div className="row">
						<div className="col">
							{/* * make impact  */}
							<div className="card">
								<div className="card-body">
									<h2 className="h2">Make an impact</h2>
									<h4 className="h4">- Thank you</h4>
									<p className="lead">
										When you give your monthly gift or more, you are supporting
										BCU International as a whole including both broadcast and
										humanitarian aspects of the ministry
									</p>
									<p></p>
								</div>
							</div>

							{/* * give button */}
							<div className="card card_give">
								<div className="card-body">
									<h4 className="h4">PAYPAL</h4>
									<p className="paragraph1">Donate with paypal</p>
									<p>R.R.G.N</p>
									<a href={PAYPAL_URL} className="btn btn-primary">
										donate
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="become_partner">
				<div>
					<h2 className="h2">why become a partner?</h2>
					<p>
						The{" "}
						<span>body of christ united global international ministries</span>{" "}
						partners have decided to commit themselves to the cause of BCU which
						is to reach a generation to impact faith and hope telling the story
						of our lord Jesus Christ with his compassion and generosity
					</p>
				</div>
			</section>

			<section className="covenant_partnership">
				<div className="contianer">
					<div className="row">
						<div className="col">
							<div className="covenant_wrapper">
								<div className="image">
									<img src={image1} alt="" />
								</div>

								<div className="card">
									<div className="card-body">
										<h3 className="h3">
											as a bcu covenant partner, you will recieve:
										</h3>
										<ul>
											<li>
												You will be prioritized as a partner to recieve
												first-hand information on what God is doing through BCU
											</li>
											<li>
												You will recieve weekly links to our powerful, dynamic
												and life-changing bible study sessions that will
												transform your life
											</li>
											<li>
												You will be given an opportunity to expand throuh
												advertising with us and take both your ministry and
												business global with our international reach
											</li>
											<li>
												As a covenant partner you will qualify to recieve
												discounts on advertisments
											</li>
											<li>
												You will also qualify as a covenant partner to recieve
												discounts on all the BCU products and materials
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="carousel_slide">
				<div className="container">
					<div className="row">
						<div className="col">
							<div
								id="carouselExampleSlidesOnly"
								className="carousel slide"
								data-bs-ride="carousel"
							>
								<div className="carousel-inner">
									<div className="carousel-item active">
										<img src={image2} className="d-block w-100" alt="..." />
									</div>
									<div className="carousel-item">
										<img src={image3} className="d-block w-100" alt="..." />
									</div>
									<div className="carousel-item">
										<img src={image4} className="d-block w-100" alt="..." />
									</div>
									<div className="carousel-item">
										<img src={image5} className="d-block w-100" alt="..." />
									</div>
									<div className="carousel-item">
										<img src={image6} className="d-block w-100" alt="..." />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="tasks_ahead">
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="card">
								<div className="card-body">
									<h3 className="h3">bcu tasks ahead</h3>
									<ul>
										<li>
											<p>
												As a living organism the Body of Christ United Global
												International Ministries is in need of people who will
												stand in the gap as prayer partners and makes
												intercessions for the vision
											</p>
										</li>
										<li>
											<p>
												As the Body of Christ United Global International
												Ministries, we are also seeking covenant partners who
												will stand with this vision of God to love by action
											</p>
										</li>
									</ul>
								</div>
							</div>

							<div className="card">
								<div className="card-body">
									<h3 className="h3">where does my gift go?</h3>
									<ul>
										<li>
											<p>
												We always want the best from God, therefore when you
												give, you should plant the best. When you give, you are
												planting seeds that will be multiplied back unto you
											</p>
										</li>
										<li>
											<p>
												Partnership is the decision to give God your best. Your
												monthly gift or more will support BCU International as a
												whole, including both broadcast and humanitarian aspects
												of the ministry
											</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="donation_options">
				<div className="container">
					<div className="row">
						<div className="col">
							<h2>Ways To Give</h2>
							<div className="side_nav">
								<div className="nav nav-pills" id="v-pills-tab">
									<button
										className="nav-link active"
										id="v-pills-home-tab"
										data-bs-toggle="pill"
										data-bs-target="#v-pills-paypal"
										role="tab"
										type="button"
									>
										Paypal
									</button>
									<button
										className="nav-link"
										id="v-pills-home-tab"
										data-bs-toggle="pill"
										data-bs-target="#v-pills-mpesa"
										role="tab"
										type="button"
									>
										Mpesa
									</button>
									<button
										className="nav-link"
										id="v-pills-home-tab"
										data-bs-toggle="pill"
										data-bs-target="#v-pills-bank_transfer"
										role="tab"
										type="button"
									>
										Bank Transfer
									</button>
									<button
										className="nav-link"
										id="v-pills-home-tab"
										data-bs-toggle="pill"
										data-bs-target="#v-pills-mail"
										role="tab"
										type="button"
									>
										Mail
									</button>
								</div>

								<div className="tab-content" id="v-pills-tabContent">
									<div
										className="tab-pane fade show active"
										id="v-pills-paypal"
										role="tabpanel"
									>
										<div className="card">
											<div className="card-body">
												<h3>Paypal</h3>
												<p>
													<span>R.R.G.N</span>
												</p>
												<p>
													<span>
														The Body of Christ United Global International
														Ministries
													</span>
												</p>
												<p>
													You can make a one-time or reccurring gift through
													Paypal
												</p>
												<a href={PAYPAL_URL} className="btn btn-primary">
													Give via Paypal
												</a>
												<a href="/contact" className="btn btn-primary">
													Contact Us
												</a>
											</div>
										</div>
									</div>
									<div
										className="tab-pane fade"
										id="v-pills-mpesa"
										role="tabpanel"
									>
										<div className="card">
											<div className="card-body">
												<h3>Mpesa</h3>

												<p>Give via mpesa using this number +254 741 849 308</p>

												<a href="/contact" className="btn btn-primary">
													Contact Us
												</a>
											</div>
										</div>
									</div>
									<div
										className="tab-pane fade"
										id="v-pills-bank_transfer"
										role="tabpanel"
									>
										<div className="card">
											<div className="card-body">
												<h3>Autopay through your bank</h3>
												<p>
													If you wish to make your gift or Partnership Payments
													by Direct Deposit or Wire Transfer, you can contact us
													for banking details
												</p>

												<a href="/contact" className="btn btn-primary">
													Contact Us
												</a>
											</div>
										</div>
									</div>
									<div
										className="tab-pane fade"
										id="v-pills-mail"
										role="tabpanel"
									>
										<div className="card">
											<div className="card-body">
												<h3>By Mail</h3>
												<p>
													Place your offering in the mail to be delivered to our
													secured mail
												</p>
												<p>P.O Box 625 Banning California 92220</p>

												<a href="/contact" className="btn btn-primary">
													Contact Us
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default SupportUs;
