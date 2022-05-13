import { useState, useEffect } from "react";

import Feature from "./Feature";
import "./Feature.modules.css";

import db from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";

const Featured = () => {
    const [feature, setFeature] = useState([]);

    const getBooks = () => {
        const colRef = collection(db, "ebooks");
        getDocs(colRef)
            .then((snapshot) => {
                if (snapshot.docs.length > 0) {
                    snapshot.docs.forEach((doc) => {
                        setFeature((prev) => {
                            return [...prev, doc.data()];
                        });
                    });
                }
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    useEffect(() => {
        getBooks();
    }, []);

    return (
        <div className="featured">
            <h3>Featured</h3>
            <div className="featured-container">
                {feature.map((single_feature, index) => {
                    return (
                        <Feature
                            key={index}
                            author={single_feature.author}
                            title={single_feature.title}
                            date={single_feature.date.toDate().toDateString()}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Featured;
