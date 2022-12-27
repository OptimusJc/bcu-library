import { Link } from "react-router-dom";

import useFirestore from "../../../components/hooks/useFirestore";
import Cards from "../../../components/card/Cards.js";

const ChildrenBooks = () => {
    // fiction books come back and fix this
    const children_ebook_data = useFirestore("ebooks/children_ebooks/fiction");

    return (
        <>
            {children_ebook_data &&
                children_ebook_data.map((doc) => {
                    const { title, url } = doc;

                    return (
                        <Link
                            to={`/download/${doc.id}`}
                            key={doc.id}
                            state={{
                                document_title: { title },
                                document_author: { title },
                                document_url: { url },
                                from: "children_fiction_ebooks",
                            }}
                        >
                            <Cards
                                custom_style="other_section_card"
                                title={doc.title.split(".")[0]}
                            />
                        </Link>
                    );
                })}
        </>
    );
};

export default ChildrenBooks;
