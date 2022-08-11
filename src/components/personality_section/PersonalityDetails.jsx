import "./PersonalityDetails.modules.css";

const PersonalityDetails = (url) => {
	return (
		<div className="container">
			<div className="row">
				<div className="col personality">
					<h1>Personality of the week</h1>
					<h3>Personality Name</h3>
					<h5>Church</h5>

					<div className="personality-body">
						<div className="personality-image">
							<img src="https://via.placeholder.com/350x320" alt="" />
						</div>

						<div className="personality-text">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PersonalityDetails;
