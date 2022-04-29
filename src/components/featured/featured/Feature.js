import { Link } from "react-router-dom";

import "./Feature.modules.css";
import image2 from "../../../assets/images/placeholder/200x100.jpg";

const Feature = () => {
  return (
    <div className="feature">
      <ul>
        <li>
          <Link to="">
            <img
              src={image2}
              alt=""
              //   aspectRatio={50}
              className="featureImage"
            />
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
              <span>January 2, 2022</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Feature;
