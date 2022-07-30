import { Link } from "react-router-dom";

import useFirestore from "../../../components/hooks/useFirestore";
import Cards from "../../../components/card/Cards.js";

import imgSrc from "../../../assets/images/spiritual.jpg";

const SpiritualBooks = () => {
	const spiritual_ebook_data = useFirestore(
		"ebooks/spiritual_ebook/spiritual_ebooks"
	);

	return (
		<>
			{spiritual_ebook_data &&
				spiritual_ebook_data.map((doc) => {
					const { title, url } = doc;

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
								url={imgSrc}
							/>
						</Link>
					);
				})}
		</>
	);
};

export default SpiritualBooks;
