import "./cards.modules.css";

const Cards = ({ custom_style, title, url }) => {
	return (
		<div className={["card", custom_style].join(" ")}>
			<img
				src={url ? url : "https://via.placeholder.com/320x160"}
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">
					{title != null ? title : "Title of the message goes here"}
				</h5>
				<p className="card-text">
					{title != null
						? title
						: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"}
				</p>
			</div>
		</div>
	);
};

export default Cards;
