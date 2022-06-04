import Feature from "./Feature";
import "./Feature.modules.css";

import useData from "../../hooks/useData";

const Featured = () => {
    // * Get docs array from useFirestore
    const [podcast_data] = useData();

    return (
        <div className="featured">
            <h3>Featured</h3>
            <div className="featured-container">
                {podcast_data &&
                    podcast_data.map((doc) => {
                        const date = doc.createdAt.toDate().toDateString();
                        const doc_title = doc.title.split("others")[1];
                        return (
                            <Feature
                                key={doc.id}
                                doc_id={doc.id}
                                path={doc.url}
                                author={doc_title.split(".")[0]}
                                title={doc_title}
                                date={date}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default Featured;
