import { useState } from "react";

const Search = () => {
	const [searchString, setSearchString] = useState("");

	return (
		<>
			<input
				type="text"
				placeholder="search here"
				onChange={(e) => setSearchString(e.target.value)}
			/>
			<div style={{ width: "100px", height: "40px", backgroundColor: "white" }}>
				{searchString}
			</div>
		</>
	);
};

export default Search;
