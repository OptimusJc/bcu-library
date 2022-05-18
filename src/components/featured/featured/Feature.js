import { Link } from "react-router-dom";
import { BiTime } from "react-icons/bi";

import "./Feature.modules.css";
import { doc } from "firebase/firestore";

const Feature = ({ title, author, date, path, doc_id }) => {
    return (
        <div className="feature">
            <ul>
                <li>
                    <Link
                        to={`/download/${doc_id}`}
                        state={{
                            document_title: { title },
                            document_author: { author },
                            document_url: { path },
                        }}
                    >
                        <img
                            src="https://via.placeholder.com/300x200"
                            alt=""
                            className="featureImage"
                        />
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
