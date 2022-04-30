import { useState } from "react";
import "./Stream.modules.css";
import StreamLink from "./StreamLink";

import ebook from "../../assets/images/stream&download/ebook_icon_light.svg";
import music from "../../assets/images/stream&download/music_icon_light.svg";
import podcast from "../../assets/images/stream&download/podcast_icon_light.svg";
import series from "../../assets/images/stream&download/series_icon_light.svg";

const Stream = () => {
  // ! Idea is to animate on click for the li's of this section
  const [animate, setAnimate] = useState(0);

  return (
    <section className="stream_download container ">
      <h3>Stream and Download</h3>
      <p>Browse through our library of content</p>

      <ul>
        <li>
          <StreamLink
            imgSrc={ebook}
            title="Ebook"
            onClick={() => {
              setAnimate(1);
              setTimeout(() => setAnimate(0), 8000);
            }}
            data={animate}
            // classes="animate__animated animate__headShake"
          />
        </li>
        <li>
          <StreamLink
            imgSrc={music}
            title="Songs"
            classes="animate__animated animate__headShake"
          />
        </li>
        <li>
          <StreamLink
            imgSrc={podcast}
            title="Podcasts"
            classes="animate__animated animate__headShake"
          />
        </li>
        <li>
          <StreamLink
            imgSrc={series}
            title="Series"
            classes="animate__animated animate__headShake"
          />
        </li>
      </ul>
    </section>
  );
};

export default Stream;
