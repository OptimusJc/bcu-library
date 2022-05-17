import Feature from "./Feature";
import "./Feature.modules.css";

import useFirestore from "../../hooks/useFirestore";

const Featured = () => {
    // * Get docs array from useFirestore
    const docs = useFirestore("podcasts");

    return (
        <div className="featured">
            <h3>Featured</h3>
            <div className="featured-container">
                {docs &&
                    docs.map((doc, index) => {
                        const date = doc.createdAt.toDate().toDateString();
                        return (
                            <Feature
                                unique_key={index}
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
