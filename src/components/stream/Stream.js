import { Link } from "react-router-dom";
import "./Stream.modules.css";

import ebook from "../../assets/images/stream&download/ebook_icon_light.svg";
import music from "../../assets/images/stream&download/music_icon_light.svg";
import podcast from "../../assets/images/stream&download/podcast_icon_light.svg";
import series from "../../assets/images/stream&download/series_icon_light.svg";

const Stream = () => {
	return (
		<section className="stream_download">
			<h3>Stream and Download</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt
			</p>

			<ul>
				<li>
					<Link to="">
						<img src={ebook} alt="ebook icon" />
						<span>ebooks</span>
					</Link>
				</li>
				<li>
					<Link to="">
						<img src={music} alt="music icon" />
						<span>songs</span>
					</Link>
				</li>
				<li>
					<Link to="">
						<img src={podcast} alt="podcast icon" />
						<span>messages</span>
					</Link>
				</li>
				<li>
					<Link to="">
						<img src={series} alt="series icon" />
						<span>series</span>
					</Link>
				</li>
			</ul>
		</section>
	);
};

export default Stream;
