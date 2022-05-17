import { Link } from "react-router-dom";
import { BiTime } from "react-icons/bi";

import "./Feature.modules.css";
import image2 from "../../../assets/images/placeholder/200x100.jpg";

const Feature = ({ title, author, date, path, unique_key }) => {
    return (
        <div className="feature">
            <ul>
                <li key={unique_key}>
                    <a href={path}>
                        <img src={image2} alt="" className="featureImage" />
                        <div>
                            <h6 className="h6">{author}</h6>
                            <p>{title}</p>
                            <span>
                                <BiTime className={["clock"]} />
                                {date}
                            </span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Feature;
