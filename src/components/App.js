import React, { useState } from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

function App() {
	const [state, setState] = useState({ images: [] });

	const onSearchSubmit = async term => {
		const response = await unsplash.get("/search/photos", {
			params: { query: term }
		});
		setState({ images: response.data.results });
	};
	return (
		<div className="ui container" style={{ marginTop: "10px" }}>
			<SearchBar onSubmit={onSearchSubmit} />
			<ImageList images={state.images} />
		</div>
	);
}

export default App;
