import Feature from "./Feature";
import "./Feature.modules.css";

import useData from "../../hooks/useData";

const Featured = () => {
    // * Get docs array from useFirestore
    const [podcast_data] = useData();

    console.log(podcast_data);
    return (
        <div className="featured">
            <h3>Featured</h3>
            <div className="featured-container">
                {podcast_data &&
                    podcast_data.map((doc) => {
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
