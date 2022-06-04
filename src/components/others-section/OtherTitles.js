import "../apostle-section/apostle.modules.css";
import "./otherTitle.modules.css";
import Cards from "../card/Cards";

// core import
import { Link } from "react-router-dom";

// hooks for getting data
import useData from "../hooks/useData";

const OtherTitles = () => {
    // get data
    const [podcast_data] = useData();

    return (
        <section className="other-section container">
            <h3>Explore other messages</h3>
            <div className="feature-container">
                {podcast_data &&
                    podcast_data.map((doc) => {
                        // store states to be used by useLocation in the
                        // download component
                        const { title, url } = doc;
                        const doc_title = title.split("others")[1];

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
                                    title={doc_title.split(".")[0]}
                                />
                            </Link>
                        );
                    })}
            </div>
        </section>
    );
};

export default OtherTitles;
