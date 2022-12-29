import { useState } from "react";
// import Progress from "../progress/Progress";
import useStorage from "../hooks/useStorage";
import Form from "./form/Form";

const UploadForm = () => {
	const [file, setFile] = useState(null);
	const [error, setError] = useState(null);
	const [selected, setSelected] = useState([]);
	const [collection, setCollection] = useState("");
	const [category, setCategory] = useState("");

	const { url, progress } = useStorage(file, category, collection);

	console.log(category, collection, selected);

	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<Form
						selected={selected}
						setSelected={setSelected}
						error={error}
						setError={setError}
						category={category}
						setCategory={setCategory}
						collection={collection}
						setCollection={setCollection}
						file={file}
						setFile={setFile}
					/>

					{/* *output feedback */}
					<div className="output">
						{error && <div className="error">{error}</div>}
						{url && console.log("Progress on upload form", progress)}

						{/* {file && (
							<Progress
								file={file}
								setFile={setFile}
								categoryName={category}
								// setCategory={setCategory}
								collectionName={collection}
								// setCollection={setCollection}
								// setSelected={setSelected}
							/>
						)} */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default UploadForm;
