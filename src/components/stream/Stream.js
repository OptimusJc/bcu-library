import { Link } from "react-router-dom";
import "./Stream.modules.css";

import ebook from "../../assets/images/stream&download/ebook_icon_light.svg";
import music from "../../assets/images/stream&download/music_icon_light.svg";
import podcast from "../../assets/images/stream&download/podcast_icon_light.svg";
import series from "../../assets/images/stream&download/series_icon_light.svg";

const Stream = () => {
	return (
		<section className="stream_download container">
			<h3>Stream and Download</h3>
			<p>
				Browse through our library of content
			</p>

			<ul>
				<li>
					<Link to="">
						<div>
							<img src={ebook} alt="ebook icon" />
						</div>
						<span>ebooks</span>
					</Link>
				</li>
				<li>
					<Link to="">
						<div>
							<img src={music} alt="music icon" />
						</div>
						<span>songs</span>
					</Link>
				</li>
				<li>
					<Link to="">
						<div>
							<img src={podcast} alt="podcast icon" />
						</div>
						<span>messages</span>
					</Link>
				</li>
				<li>
					<Link to="">
						<div>
							<img src={series} alt="series icon" />
						</div>
						<span>series</span>
					</Link>
				</li>
			</ul>
		</section>
	);
};

export default Stream;
