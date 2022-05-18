import { Link } from "react-router-dom";
import footer_logo from "../../assets/images/bcu_logo.png";
import "./footer.modules.css";
import styles from "../header/Navigation.module.css";

import { FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer
            className={["container-fluid", styles.backgroundColor].join(" ")}
        >
            <div className={["footer"]}>
                <div className="footer-logo">
                    <img src={footer_logo} alt="footer logo" />

                    <ul className="footer-icons">
                        <li>
                            <Link to="" className="facebook">
                                <FaFacebook />
                            </Link>
                        </li>
                        <li>
                            <Link to="" className="youtube">
                                <FaYoutube />
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="about_ul">
                    <ul>
                        <li>About</li>
                        <li>
                            <Link to="">About the Library</Link>
                        </li>
                        <li>
                            <Link to="">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Resources</li>
                        <li>
                            <Link to="">Ebooks</Link>
                        </li>
                        <li>
                            <Link to="">Collections</Link>
                        </li>
                        <li>
                            <Link to="">Messages</Link>
                        </li>
                        <li>
                            <Link to="">Songs</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Help</li>
                        <li>
                            <Link to="">FAQ's</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Support</li>
                        <li>
                            <Link to="">Volunteer</Link>
                        </li>
                        <li>
                            <Link to="">Donate</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    &#169;2022. Body of Christ United Global International
                    Ministries
                </p>
            </div>
        </footer>
    );
};

export default Footer;
