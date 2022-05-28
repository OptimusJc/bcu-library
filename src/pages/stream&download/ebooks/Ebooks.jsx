import { Link } from "react-router-dom";
// component imports
import Cards from "../../../components/card/Cards";
// styles imports
import styles from "./ebooks.module.css";

import useFirestore from "../../../components/hooks/useFirestore.js";

const Ebooks = () => {
    const spiritual_ebook_data = useFirestore(
        "ebooks/spiritual_ebook/spiritual_ebooks"
    );

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="other-section">
                        <h3 className="mb-4">Welcome to the ebooks section</h3>
                        <ul
                            className={["nav nav-tabs", styles.nav_tabs].join(
                                " "
                            )}
                        >
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="#"
                                >
                                    Spiritual
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">
                                    Cooking
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">
                                    Educational
                                </Link>
                            </li>
                        </ul>
                        <div className="feature-container">
                            {spiritual_ebook_data &&
                                spiritual_ebook_data.map((doc) => {
                                    const { title, url } = doc;

                                    console.log(doc);

                                    return (
                                        <Link
                                            to={`/download/${doc.id}`}
                                            key={doc.id}
                                            state={{
                                                document_title: { title },
                                                document_author: { title },
                                                document_url: { url },
                                                from: "spiritual_ebooks",
                                            }}
                                        >
                                            <Cards
                                                custom_style="other_section_card"
                                                title={doc.title.split(".")[0]}
                                            />
                                        </Link>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ebooks;
