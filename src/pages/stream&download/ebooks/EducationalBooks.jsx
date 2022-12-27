import { Link } from "react-router-dom";

import useFirestore from "../../../components/hooks/useFirestore";
import Cards from "../../../components/card/Cards.js";

const EducationalBooks = () => {
    const educational_ebook_data = useFirestore(
        "ebooks/educational_ebooks/educational_ebooks"
    );

    return (
        <>
            {educational_ebook_data &&
                educational_ebook_data.map((doc) => {
                    const { title, url } = doc;

                    return (
                        <Link
                            to={`/download/${doc.id}`}
                            key={doc.id}
                            state={{
                                document_title: { title },
                                document_author: { title },
                                document_url: { url },
                                from: "educational_ebooks",
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

export default EducationalBooks;
