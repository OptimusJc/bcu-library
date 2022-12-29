import "./form.modules.css";

const Form = ({
	selected,
	setSelected,
	file,
	setFile,
	error,
	setError,
	collection,
	setCollection,
	category,
	setCategory,
}) => {
	const onChangeHandler = (e) => {
		const types =
			category === "podcasts"
				? ["audio/mpeg", "audio/mp3", "video/mp4", "video/mpeg", "video/mkv"]
				: ["application/epub+zip", "application/pdf"];

		const eFiles = Array.from(e.target.files);

		if (eFiles) {
			eFiles.map((selectedFile) => {
				return types.includes(selectedFile.type)
					? setSelected((prev) => [...prev, selectedFile])
					: setError(`Select the correct file type for category: ${category}!`);
			});
		}
	};

	const categoryHandler = (e) => {
		setCategory(e.target.value);
	};

	const collectionHandler = (e) => {
		setCollection(e.target.value);
	};

	const onClickHandler = (e) => {
		e.preventDefault();

		if (selected) {
			setFile(selected);
		} else {
			setFile(null);
		}
	};

	return (
		<form>
			<h3>Upload Section</h3>

			<div className="file-input">
				<label htmlFor="fileInput" className="label">
					Select File
				</label>

				<input
					className="fileInput"
					type="file"
					id="fileInput"
					onChange={onChangeHandler}
					multiple
				/>
				<ul>
					{selected?.map((newFile) => {
						return (
							<li className="file-name" key={newFile.name}>
								{newFile.name}
							</li>
						);
					})}
				</ul>
			</div>

			<div className="category_select">
				<label htmlFor="category_select">Choose Category</label>
				<select name="category" id="category_select" onClick={categoryHandler}>
					<option value="" defaultValue>
						Select category
					</option>
					<option value="ebooks">Ebooks</option>
					<option value="podcasts">Podcasts</option>
				</select>
			</div>

			{category === "ebooks" && (
				<div className="collection_select">
					<label htmlFor="collection_select">Choose Sub-Category</label>
					<select
						name="collection"
						id="collection_select"
						onClick={collectionHandler}
					>
						<option value="" defaultValue>
							Select category
						</option>
						<option value="children_ebooks/fiction">Children Stories</option>
						<option value="cooking_ebooks">Cookbooks</option>
						<option value="educative_ebooks">Education</option>
						<option value="fashion_ebooks">Fashion</option>
						<option value="featured_ebooks">Featured (special category)</option>
						<option value="health_ebooks">Health</option>
						<option value="spiritual_ebooks">Spiritual</option>
					</select>
				</div>
			)}

			{category === "podcasts" && (
				<div className="collection_select">
					<label htmlFor="collection_select">Choose Sub-Category</label>
					<select
						name="collection"
						id="collection_select"
						onClick={collectionHandler}
					>
						<option value="" defaultValue>
							Select category
						</option>
						<option value="featured">Featured Podcasts</option>
						<option value="founders">Founders</option>
						<option value="minister1">Random Minister 1</option>
						<option value="minister2">Random Minister 2</option>
						<option value="others">Others</option>
						<option value="series">Series Podcasts</option>
					</select>
				</div>
			)}

			<input
				type="submit"
				value="upload"
				className="btn btn-primary mt-4"
				onClick={onClickHandler}
			/>
		</form>
	);
};

export default Form;
