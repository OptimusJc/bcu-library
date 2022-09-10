import React, { useCallback } from "react";
import { FixedSizeList as List } from "react-window";

import Feature from "./Feature";
import useFirestore from "../../hooks/useFirestore";

import "./Feature.modules.css";

const Featured = () => {
	// * Get docs array from useFirestore
	const featured_data = useFirestore("podcasts/others/other_podcasts");

	const Row = useCallback(({ index, style }) => {
		const { url, title, createdAt } = featured_data[index] || {};
		const localDate =
			createdAt &&
			createdAt.toDate() &&
			createdAt.toDate().toLocaleDateString();
		const docTitle = title && title.split(".")[0];
		const docId = featured_data[index] && featured_data[index].id;

		return (
			<div style={style}>
				<Feature
					doc_id={docId}
					path={url}
					author={docTitle}
					title={title}
					date={localDate}
				/>
			</div>
		);
	});

	return (
		<div className="featured">
			<h3>Featured</h3>
			<div className="featured-container">
				<List
					height={410}
					width={440}
					itemSize={250}
					itemCount={featured_data.length}
					className="list--container"
				>
					{Row}
				</List>
			</div>
		</div>
	);
};

export default Featured;
