import { useState } from "react";
import { motion } from "framer-motion";
import "./Stream.modules.css";
import StreamLink from "./StreamLink";

import ebook from "../../assets/images/stream&download/ebook_icon_light.svg";
import music from "../../assets/images/stream&download/music_icon_light.svg";
import podcast from "../../assets/images/stream&download/podcast_icon_light.svg";
import series from "../../assets/images/stream&download/series_icon_light.svg";

const Stream = () => {
	return (
		<section className="stream_download">
			<div className="container">
				<h3>Stream and download</h3>
				<p>Browse through our library of content</p>

				<ul>
					<li>
						<StreamLink to="/ebooks/spiritual" imgSrc={ebook} title="Ebook" />
					</li>
					<li>
						<StreamLink to="/songs" imgSrc={music} title="Songs" />
					</li>
					<li>
						<StreamLink to="/podcasts" imgSrc={podcast} title="Podcasts" />
					</li>
					<motion.li whileHover={{ scale: 2, transition: {} }}>
						<StreamLink to="/series" imgSrc={series} title="Series" />
					</motion.li>
				</ul>
			</div>
		</section>
	);
};

export default Stream;
