import { Link } from "react-router-dom";

import useFirestore from "../../../components/hooks/useFirestore";
import Cards from "../../../components/card/Cards.js";

import healthUrl from "../../../assets/images/health.jpg";

const HealthEbooks = () => {
	const health_ebook_data = useFirestore("ebooks/health_ebook/health_ebooks");

	return (
		<>
			{health_ebook_data &&
				health_ebook_data.map((doc) => {
					const { title, url } = doc;

					return (
						<Link
							to={`/download/${doc.id}`}
							key={doc.id}
							state={{
								document_title: { title },
								document_author: { title },
								document_url: { url },
								from: "health_ebooks",
							}}
						>
							<Cards
								custom_style="other_section_card"
								title={doc.title.split(".")[0]}
								url={healthUrl}
							/>
						</Link>
					);
				})}
		</>
	);
};

export default HealthEbooks;
