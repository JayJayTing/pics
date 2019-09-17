import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

function App() {
	function onSearchSubmit(term) {
		axios.get("https://api.unsplash.com/search/photos", {
			params: { query: term },
			headers: {
				Authorization:
					"Client-ID d013c75a1cd43e3a01e266b8a0a847f6104ab9fb594a5e2595dab97fbcdfd56d"
			}
		});
	}
	return (
		<div className="ui container" style={{ marginTop: "10px" }}>
			<SearchBar onSubmit={onSearchSubmit} />
		</div>
	);
}

export default App;
