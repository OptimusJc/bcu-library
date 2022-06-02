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
                            <h3 className="mb-4">
                                Welcome to the ebooks section
                            </h3>
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
                                    /* enter ebooks body here */

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
