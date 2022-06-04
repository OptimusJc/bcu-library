import { NavLink, Outlet } from "react-router-dom";

// styles imports
import styles from "./ebooks.module.css";

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
                            <ul className={["nav", styles.nav_tabs].join(" ")}>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link active"
                                        aria-current="page"
                                        to="spiritual"
                                    >
                                        <span className="badge rounded-pill bg-primary">
                                            Spiritual
                                        </span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="cooking">
                                        <span className="badge rounded-pill bg-secondary">
                                            Cooking
                                        </span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        to="educational"
                                    >
                                        <span className="badge rounded-pill bg-success">
                                            Education
                                        </span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="health">
                                        <span className="badge rounded-pill bg-danger">
                                            Health
                                        </span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="children">
                                        <span className="badge rounded-pill bg-info">
                                            Children
                                        </span>
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
