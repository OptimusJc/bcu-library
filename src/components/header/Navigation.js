import { Link } from "react-router-dom";
import "../../index.css";
import classes from "./Navigation.module.css";
import logo from "../../assets/images/bcu_logo.png";

import ebook from "../../assets/images/stream&download/ebook_icon_light.svg";
import music from "../../assets/images/stream&download/music_icon_light.svg";
import podcast from "../../assets/images/stream&download/podcast_icon_light.svg";
import series from "../../assets/images/stream&download/series_icon_light.svg";

function Navigation() {
    return (
        <div className={classes.backgroundColor}>
            <header>
                <nav className="navbar navbar-expand-lg">
                    <div
                        className={["container", classes.nav_container].join(
                            " "
                        )}
                    >
                        <Link to="/" className={classes.navbar_brand}>
                            <img src={logo} alt="bcu logo" />
                        </Link>

                        <button
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar"
                            aria-controls="offcanvasNavbar"
                            className={[
                                "navbar-toggler",
                                classes.navbar_toggler,
                            ].join(" ")}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className={[
                                classes.backgroundColor,
                                classes.offcanvasNavbar,
                                "offcanvas",
                                "offcanvas-end",
                            ].join(" ")}
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"
                        >
                            <div className="offcanvas-header">
                                <div className={classes.navbar_brand}>
                                    <img src={logo} alt="bcu logo" />
                                </div>
                                <button
                                    type="button"
                                    className="btn-close text-reset"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                    style={{
                                        marginInlineEnd: "calc(1rem / 16)",
                                    }}
                                ></button>
                            </div>
                            <div className={classes.offcanvas_body}>
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <Link
                                            to="/"
                                            className="nav-link active"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="/news-and-magazines"
                                            className="nav-link"
                                        >
                                            News & Magazines
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="/kids-and-teens"
                                            className="nav-link"
                                        >
                                            Kids & Teens
                                        </Link>
                                    </li>

                                    {/* stream and download link  */}
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            id="offcanvasNavbarDropdown"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Stream & Download
                                        </a>
                                        <ul
                                            className={[
                                                "dropdown-menu",
                                                classes.dropdown_menu_container,
                                            ].join(" ")}
                                            aria-labelledby="offcanvasNavbarDropdown"
                                        >
                                            <li>
                                                <Link
                                                    to="/ebooks"
                                                    className="dropdown-item"
                                                >
                                                    <img src={ebook} alt="" />
                                                    Ebooks
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/songs"
                                                    className="dropdown-item"
                                                >
                                                    <img src={music} alt="" />
                                                    Songs
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/podcasts"
                                                    className="dropdown-item"
                                                >
                                                    <img src={podcast} alt="" />
                                                    Podcasts
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/series"
                                                    className="dropdown-item"
                                                >
                                                    <img src={series} alt="" />
                                                    Series
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href=""
                                            id="offcanvasNavbarDropdown"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Cool Stuff
                                        </a>
                                        <ul
                                            className={[
                                                "dropdown-menu",
                                                classes.dropdown_menu_container,
                                            ].join(" ")}
                                            aria-labelledby="offcanvasNavbarDropdown"
                                        >
                                            <li>
                                                <Link
                                                    to="/stream-and-download/ebooks"
                                                    className="dropdown-item"
                                                >
                                                    Web Interviews
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/stream-and-download/ebooks"
                                                    className="dropdown-item"
                                                >
                                                    Commentaries
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>

                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link
                                            to="/contact"
                                            className="nav-link"
                                        >
                                            Contact Us
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="/support"
                                            className="nav-link"
                                        >
                                            Support Library
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Navigation;
