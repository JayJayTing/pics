import React, { useState } from "react";

function SearchBar({ onSubmit }) {
	const [state, setState] = useState({ term: "" });
	function onFormSubmit(event) {
		event.preventDefault();
		onSubmit(state.term);
	}

	return (
		<div className="ui segment">
			<form onSubmit={onFormSubmit} className="ui form">
				<div className="field">
					<label>Image Search</label>
					<input
						type="text"
						value={state.term}
						onChange={e => {
							setState({ ...state, term: e.target.value });
						}}
					/>
				</div>
			</form>
		</div>
	);
}

export default SearchBar;
