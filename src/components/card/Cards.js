import "./cards.modules.css";
import WebViewer from "@pdftron/webviewer";
import { useRef, useEffect } from "react";
import { isCompositeComponent } from "react-dom/test-utils";

const Cards = ({ custom_style, title, url }) => {
	const viewer = useRef(null);

	useEffect(() => {
		WebViewer(
			{
				path: "/public/webviewer_lib/",
				initialDoc: { url },
			},
			viewer
		).then((instance) => {
			const { documentViewer } = instance.Core;
			documentViewer.addEventListener("documentLoaded", () => {
				const doc = documentViewer.getDocument();
				const pageNum = 1;

				doc.loadThumbnailAsync(pageNum, (thumbnail) => {
					viewer.current.src = thumbnail;
				});
			});
			console.log(
				"🚀 ~ file: Cards.js ~ line 25 ~ documentViewer.addEventListener ~ documentViewer",
				documentViewer
			);
		});
	}, []);
	console.log(url);

	return (
		<div
			className={["card", custom_style].join(" ")}
			// data-aos="fade-right"
			// data-aos-delay="10"
		>
			<img
				src={url ? url : "https://via.placeholder.com/300x200"}
				className="card-img-top"
				alt="..."
				ref={viewer}
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
