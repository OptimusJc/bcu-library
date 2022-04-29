import { Link } from "react-router-dom";
import footer_logo from "../../assets/images/bcu_logo.png";
import "./footer.modules.css";

import { FaFacebook, FaYoutube } from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <footer className="backgroundColor container">
      <div className="footer-logo">
        <img src={footer_logo} alt="footer logo" />
      </div>

      <div>
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

      <div className="footer-bottom">
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
        <p>&#169;2022. Body of Christ United Global International Ministries</p>
      </div>
    </footer>
  );
};

export default Footer;
