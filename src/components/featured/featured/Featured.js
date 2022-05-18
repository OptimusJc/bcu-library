import Feature from "./Feature";
import "./Feature.modules.css";

import useData from "../../hooks/useData";

const Featured = () => {
    // * Get docs array from useFirestore
    const docs = useData();

    return (
        <div className="featured">
            <h3>Featured</h3>
            <div className="featured-container">
                {docs &&
                    docs.map((doc) => {
                        const date = doc.createdAt.toDate().toDateString();
                        return (
                            <Feature
                                key={doc.id}
                                doc_id={doc.id}
                                path={doc.url}
                                author={doc.title.split(".")[0]}
                                title={doc.title}
                                date={date}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default Featured;
