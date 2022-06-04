import { NavLink } from "react-router-dom";
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
                        <NavLink to="/" className={classes.navbar_brand}>
                            <img src={logo} alt="bcu logo" />
                        </NavLink>

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
                            tab-index="-1"
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
                            <div
                                className={[
                                    "offcanvas-body",
                                    classes.offcanvas_body,
                                ].join(" ")}
                            >
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <NavLink
                                            to="/"
                                            className="nav-link active"
                                            aria-current="page"
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/news-and-magazines"
                                            className="nav-link"
                                        >
                                            News & Magazines
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/kids-and-teens"
                                            className="nav-link"
                                        >
                                            Kids & Teens
                                        </NavLink>
                                    </li>

                                    {/* stream and download link  */}
                                    <li className="nav-item dropdown">
                                        <NavLink
                                            className="nav-link 
                                    dropdown-toggle"
                                            to="#"
                                            id="offcanvasNavbarDropdown"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Stream & Download
                                        </NavLink>
                                        <ul
                                            className={[
                                                "dropdown-menu",
                                                classes.dropdown_menu_container,
                                            ].join(" ")}
                                            aria-labelledby="offcanvasNavbarDropdown"
                                        >
                                            <li>
                                                <NavLink
                                                    to="/ebooks/spiritual"
                                                    className="dropdown-item"
                                                >
                                                    <img src={ebook} alt="" />
                                                    Ebooks
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/songs"
                                                    className="dropdown-item"
                                                >
                                                    <img src={music} alt="" />
                                                    Songs
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/podcasts"
                                                    className="dropdown-item"
                                                >
                                                    <img src={podcast} alt="" />
                                                    Podcasts
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/series"
                                                    className="dropdown-item"
                                                >
                                                    <img src={series} alt="" />
                                                    Series
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <NavLink
                                            to="#"
                                            className="nav-link dropdown-toggle"
                                            id="offcanvasNavbarDropdown"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Cool Stuff
                                        </NavLink>
                                        <ul
                                            className={[
                                                "dropdown-menu",
                                                classes.dropdown_menu_container,
                                            ].join(" ")}
                                            aria-labelledby="offcanvasNavbarDropdown"
                                        >
                                            <li>
                                                <NavLink
                                                    to="/stream-and-download/ebooks"
                                                    className="dropdown-item"
                                                >
                                                    Web Interviews
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/stream-and-download/ebooks"
                                                    className="dropdown-item"
                                                >
                                                    Commentaries
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>

                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink
                                            to="/contact"
                                            className="nav-link"
                                        >
                                            Contact Us
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/support"
                                            className="nav-link"
                                        >
                                            Support Library
                                        </NavLink>
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
