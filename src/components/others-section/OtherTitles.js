import "../apostle-section/apostle.modules.css";
import "./otherTitle.modules.css";
import Cards from "../card/Cards";

// core import
import { Link } from "react-router-dom";

// hooks for getting data
import useData from "../hooks/useData";

const OtherTitles = () => {
    // get data
    const docs = useData();

    return (
        <section className="other-section container">
            <h3>Explore other messages</h3>
            <div className="feature-container">
                {docs &&
                    docs.map((doc) => {
                        // store states to be used by useLocation in the
                        // download component
                        const { title, url } = doc;

                        return (
                            <Link
                                to={`/download/${doc.id}`}
                                key={doc.id}
                                state={{
                                    document_title: { title },
                                    document_author: { title },
                                    document_url: { url },
                                    from: "otherTitle",
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
        </section>
    );
};

export default OtherTitles;
