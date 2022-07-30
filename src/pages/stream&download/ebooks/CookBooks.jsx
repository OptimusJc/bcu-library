import { Link } from "react-router-dom";

import useFirestore from "../../../components/hooks/useFirestore";
import Cards from "../../../components/card/Cards.js";
import cookingUrl from "../../../assets/images/cooking.jpg";

const CookBooks = () => {
	const cooking_ebook_data = useFirestore(
		"ebooks/cooking_ebook/cooking_ebooks"
	);

	return (
		<>
			{cooking_ebook_data &&
				cooking_ebook_data.map((doc) => {
					const { title, url } = doc;

					return (
						<Link
							to={`/download/${doc.id}`}
							key={doc.id}
							state={{
								document_title: { title },
								document_author: { title },
								document_url: { url },
								from: "cooking_ebooks",
							}}
						>
							<Cards
								custom_style="other_section_card"
								title={doc.title.split(".")[0]}
								url={cookingUrl}
							/>
						</Link>
					);
				})}
		</>
	);
};

export default CookBooks;
