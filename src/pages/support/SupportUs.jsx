import "./SupportUs.modules.css";

function SupportUs() {
	return (
		<div>
			<div className="supportus_hero_section">
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
			</div>

			<div className="supportus_give">
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
									<p>R.R.C.B.N</p>
									<button className="btn btn-primary">donate</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="become_partner">
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
			</div>
		</div>
	);
}

export default SupportUs;
