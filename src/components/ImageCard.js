import React, { useEffect } from "react";

function ImageCard({ image }) {
	let imageRef = React.createRef(); //this function has the ability to check the image ref

	return (
		<div>
			<img red={imageRef} alt={image.description} src={image.urls.regular} />
		</div>
	);
}

export default ImageCard;
