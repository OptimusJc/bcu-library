import { Link } from "react-router-dom";
import { BiTime } from "react-icons/bi";

import "./Feature.modules.css";
import image2 from "../../../assets/images/placeholder/200x100.jpg";

const Feature = () => {
    return (
        <div className="feature">
            <ul>
                <li>
                    <Link to="">
                        <img src={image2} alt="" className="featureImage" />
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit,{" "}
                            </p>
                            <span>
                                <BiTime className={["clock"]} />
                                January 2, 2022
                            </span>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Feature;
