import { Link } from "react-router-dom";
import { BiTime } from "react-icons/bi";

import "./Feature.modules.css";
import image2 from "../../../assets/images/placeholder/200x100.jpg";

const Feature = ({ title, author, date }) => {
    return (
        <div className="feature">
            <ul>
                <li>
                    <Link to="">
                        <img src={image2} alt="" className="featureImage" />
                        <div>
                            <h6 className="h6">{author}</h6>
                            <p>{title}</p>
                            <span>
                                <BiTime className={["clock"]} />
                                {date}
                            </span>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Feature;
