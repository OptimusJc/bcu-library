import { NavLink, Outlet } from "react-router-dom";

// styles imports
import styles from "./ebooks.module.css";

// component imports
import CookBooks from "./CookBooks";
import EducationalBooks from "./EducationalBooks";
import SpiritualBooks from "./SpiritualBooks";

const Ebooks = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="other-section">
                            <h2 className={["mb-4", styles.h2].join(" ")}>
                                BCU library ebooks section
                            </h2>
                            <p>
                                Find an assortment of books from our different
                                catalogs
                            </p>
                            <ul
                                className={[
                                    "nav nav-tabs",
                                    styles.nav_tabs,
                                ].join(" ")}
                            >
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link active"
                                        aria-current="page"
                                        to="spiritual"
                                    >
                                        Spiritual
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="cooking">
                                        Cooking
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        to="educational"
                                    >
                                        Educational
                                    </NavLink>
                                </li>
                            </ul>

                            <div
                                className={[
                                    "feature-container",
                                    styles.ebook_container,
                                ].join(" ")}
                            >
                                {
                                    /* 
                                    Use <Outlet/> component to cycle through 
                                    the url params and render the appropriate component 
                                   */
                                    <Outlet />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Ebooks;
