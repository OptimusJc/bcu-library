import { useState } from "react";
import "./Stream.modules.css";
import StreamLink from "./StreamLink";

import ebook from "../../assets/images/stream&download/ebook_icon_light.svg";
import music from "../../assets/images/stream&download/music_icon_light.svg";
import podcast from "../../assets/images/stream&download/podcast_icon_light.svg";
import series from "../../assets/images/stream&download/series_icon_light.svg";

import anime from "animejs/lib/anime.es.js";

const Stream = () => {
    // ! Idea is to animate on click for the li's of this section
    // const animation = () => {
    //     anime({
    //         targets: ".stream_download .animate_link",

    //         // rotate: {
    //         //     value: 360,
    //         //     duration: 1500,
    //         //     easing: "easeInOutSine",
    //         // },
    //     });
    // };

    // const animate = (e) => {
    //     const element = e.target;
    //     element.classList.remove(".stream_download .animate_link");
    //     setTimeout(() => {
    //         element.classList.add(".stream_download .animate_link");
    //     }, 100);
    //     // console.log(element.classList);
    // };

    return (
        <section className="stream_download">
            <div className="container">
                <h3>Stream and download</h3>
                <p>Browse through our library of content</p>

                <ul>
                    <li>
                        <StreamLink
                            to="/ebooks/spiritual"
                            imgSrc={ebook}
                            title="Ebook"
                            // onClick={animate}
                            classes="animate__animated animate__headShake"
                        />
                    </li>
                    <li>
                        <StreamLink
                            to="/songs"
                            imgSrc={music}
                            title="Songs"
                            classes="animate__animated animate__headShake"
                        />
                    </li>
                    <li>
                        <StreamLink
                            to="/podcasts"
                            imgSrc={podcast}
                            title="Podcasts"
                            classes="animate__animated animate__headShake"
                        />
                    </li>
                    <li>
                        <StreamLink
                            to="/series"
                            imgSrc={series}
                            title="Series"
                            classes="animate__animated animate__headShake"
                        />
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Stream;
